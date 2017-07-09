<?php

namespace App\Http\Services\Qiniu;

final class Auth
{
    private $accessKey;
    private $secretKey;
    private $bucket;

    public function __construct()
    {
        $this->accessKey = env('QINIU_ACCESS_KEY');
        $this->secretKey = env('QINIU_SECRET_KEY');
        $this->bucket = env('QINIU_BUCKET');
    }

    public function getAccessKey()
    {
        return $this->accessKey;
    }

    public function sign($data)
    {
        $hmac = hash_hmac('sha1', $data, $this->secretKey, true);
        return $this->accessKey . ':' . $this->base64_urlSafeEncode($hmac);
    }

    public function signWithData($data)
    {
        $data = $this->base64_urlSafeEncode($data);
        return $this->sign($data) . ':' . $data;
    }

    public function signRequest($urlString, $body, $contentType = null)
    {
        $url = parse_url($urlString);
        $data = '';
        if (array_key_exists('path', $url)) {
            $data = $url['path'];
        }
        if (array_key_exists('query', $url)) {
            $data .= '?' . $url['query'];
        }
        $data .= "\n";

        if ($body !== null && $contentType === 'application/x-www-form-urlencoded') {
            $data .= $body;
        }
        return $this->sign($data);
    }

    public function verifyCallback($contentType, $originAuthorization, $url, $body)
    {
        $authorization = 'QBox ' . $this->signRequest($url, $body, $contentType);
        return $originAuthorization === $authorization;
    }

    public function privateDownloadUrl($baseUrl, $expires = 3600)
    {
        $deadline = time() + $expires;

        $pos = strpos($baseUrl, '?');
        if ($pos !== false) {
            $baseUrl .= '&e=';
        } else {
            $baseUrl .= '?e=';
        }
        $baseUrl .= $deadline;

        $token = $this->sign($baseUrl);
        return "$baseUrl&token=$token";
    }

    public function uploadToken(
        $key = null,
        $expires = 3600,
        $policy = null,
        $strictPolicy = true,
        Zone $zone = null
    ) {
        $deadline = time() + $expires;
        $scope = $this->bucket;
        if ($key !== null) {
            $scope .= ':' . $key;
        }
        $args = array();
        $args = self::copyPolicy($args, $policy, $strictPolicy);
        $args['scope'] = $scope;
        $args['deadline'] = $deadline;

        if ($zone === null) {
            $zone = new Zone();
        }

        list($upHosts, $err) = $zone->getUpHosts($this->accessKey, $this->bucket);
        if ($err === null) {
            $args['upHosts'] = $upHosts;
        }
        
        $b = json_encode($args);
        return $this->signWithData($b);
    }

    /**
     *上传策略，参数规格详见
     *http://developer.qiniu.com/docs/v6/api/reference/security/put-policy.html
     */
    private static $policyFields = array(
        'callbackUrl',
        'callbackBody',
        'callbackHost',
        'callbackBodyType',
        'callbackFetchKey',

        'returnUrl',
        'returnBody',

        'endUser',
        'saveKey',
        'insertOnly',

        'detectMime',
        'mimeLimit',
        'fsizeMin',
        'fsizeLimit',

        'persistentOps',
        'persistentNotifyUrl',
        'persistentPipeline',
        
        'deleteAfterDays',

        'upHosts',
    );

    private static $deprecatedPolicyFields = array(
        'asyncOps',
    );

    private static function copyPolicy(&$policy, $originPolicy, $strictPolicy)
    {
        if ($originPolicy === null) {
            return array();
        }
        foreach ($originPolicy as $key => $value) {
            if (in_array((string) $key, self::$deprecatedPolicyFields, true)) {
                throw new \InvalidArgumentException("{$key} has deprecated");
            }
            if (!$strictPolicy || in_array((string) $key, self::$policyFields, true)) {
                $policy[$key] = $value;
            }
        }
        return $policy;
    }

    public function authorization($url, $body = null, $contentType = null)
    {
        $authorization = 'QBox ' . $this->signRequest($url, $body, $contentType);
        return array('Authorization' => $authorization);
    }

    /**
     * 对提供的数据进行urlsafe的base64编码。
     *
     * @param string $data 待编码的数据，一般为字符串
     *
     * @return string 编码后的字符串
     * @link http://developer.qiniu.com/docs/v6/api/overview/appendix.html#urlsafe-base64
     */
    private function base64_urlSafeEncode($data)
    {
        $find = array('+', '/');
        $replace = array('-', '_');
        return str_replace($find, $replace, base64_encode($data));
    }
}
