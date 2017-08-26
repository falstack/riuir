<?php

namespace App\Services;

class GeeCaptcha
{
    const GT_SDK_VERSION = 'php_3.0.0';

    public static $connectTimeout = 1;
    public static $socketTimeout  = 1;
    private       $response;
    protected     $useTwoFactor;

    public function __construct($useTwoFactor = false)
    {
        $this->useTwoFactor = $useTwoFactor;
        $this->captcha_id  = config('geetest.id');
        $this->private_key = config('geetest.key');
    }

    /**
     * @return bool|mixed|string
     *
     * 判断验证是否成功
     */
    public function success()
    {
        return $this->success_validate($_POST['geetest_challenge'], $_POST['geetest_validate'], $_POST['geetest_seccode']);
    }

    /**
     * @return int
     *
     * GT 服务器是否有回应
     */
    public function hasAnswer()
    {
        return $this->fail_validate($_POST['geetest_challenge'], $_POST['geetest_validate']);
    }

    /**
     * @return bool
     *
     * 判断是否是正确来自GT的服务器，万一down机或者什么的。
     */
    public function isFromGTServer()
    {
        session_start();

        return $_SESSION['gtserver'] == 1;
    }

    /**
     * @return mixed
     *
     * 判断GT 服务器是否正常
     */
    public function GTServerIsNormal()
    {
        $status = $this->pre_process();

        if ($this->useTwoFactor) {
            session_start();
            $_SESSION['gtserver'] = $status;
        }

        return $this->get_response_str();
    }

    /**
     * 判断极验服务器是否down机
     *
     * @return int
     */
    public function pre_process()
    {
        $data = [
            'gt' => $this->captcha_id,
            'new_captcha' => 1
        ];
        $query = http_build_query($data);
        $url = "http://api.geetest.com/register.php?" . $query;
        $challenge = $this->send_request($url);
        if (strlen($challenge) != 32) {
            $this->failback_process();
            return 0;
        }
        $this->success_process($challenge);
        return 1;
    }

    /**
     * @param $challenge
     */
    private function success_process($challenge)
    {
        $challenge        = md5($challenge . $this->private_key);
        $result           = array(
            'success'     => 1,
            'gt'          => $this->captcha_id,
            'challenge'   => $challenge,
            'new_captcha' => 1
        );
        $this->response = $result;
    }

    /**
     *
     */
    private function failback_process()
    {
        $rnd1             = md5(rand(0, 100));
        $rnd2             = md5(rand(0, 100));
        $challenge        = $rnd1 . substr($rnd2, 0, 2);
        $result           = array(
            'success'     => 0,
            'gt'          => $this->captcha_id,
            'challenge'   => $challenge,
            'new_captcha' => 1
        );
        $this->response = $result;
    }

    /**
     * @return mixed
     */
    public function get_response_str()
    {
        return json_encode($this->response);
    }

    /**
     * 返回数组方便扩展
     *
     * @return mixed
     */
    public function get_response()
    {
        return $this->response;
    }

    /**
     * 正常模式获取验证结果
     *
     * @param string $challenge
     * @param string $validate
     * @param string $seccode
     * @return int
     */
    public function success_validate($challenge, $validate, $seccode, $json_format = 1)
    {
        if (!$this->check_validate($challenge, $validate)) {
            return 0;
        }
        $query = array(
            "seccode"     => $seccode,
            "timestamp"   => time(),
            "challenge"   => $challenge,
            "captchaid"   => $this->captcha_id,
            "json_format" => $json_format,
            "sdk"         => self::GT_SDK_VERSION
        );
        $url          = "http://api.geetest.com/validate.php";
        $codevalidate = $this->post_request($url, $query);
        $obj          = json_decode($codevalidate,true);
        if ($obj === false){
            return 0;
        }
        if ($obj['seccode'] == md5($seccode)) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * 宕机模式获取验证结果
     *
     * @param $challenge
     * @param $validate
     * @return int
     */
    public function fail_validate($challenge, $validate)
    {
        return md5($challenge) == $validate ? 1 : 0;
    }

    /**
     * @param $challenge
     * @param $validate
     * @return bool
     */
    private function check_validate($challenge, $validate)
    {
        if (strlen($validate) != 32) {
            return false;
        }
        if (md5($this->private_key . 'geetest' . $challenge) != $validate) {
            return false;
        }

        return true;
    }

    /**
     * GET 请求
     *
     * @param $url
     * @return mixed|string
     */
    private function send_request($url)
    {
        if (function_exists('curl_exec')) {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, self::$connectTimeout);
            curl_setopt($ch, CURLOPT_TIMEOUT, self::$socketTimeout);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $curl_errno = curl_errno($ch);
            $data = curl_exec($ch);
            curl_close($ch);
            return $curl_errno > 0 ? 0 : $data;
        } else {
            $opts = array(
                'http' => array(
                    'method'  => "GET",
                    'timeout' => self::$connectTimeout + self::$socketTimeout,
                )
            );
            $context = stream_context_create($opts);
            $data    = @file_get_contents($url, false, $context);
            return $data ? $data : 0;
        }
    }

    /**
     *
     * @param       $url
     * @param array $postdata
     * @return mixed|string
     */
    private function post_request($url, $postdata = '') {
        if ( ! $postdata) {
            return false;
        }

        $data = http_build_query($postdata);
        if (function_exists('curl_exec')) {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, self::$connectTimeout);
            curl_setopt($ch, CURLOPT_TIMEOUT, self::$socketTimeout);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            $data = curl_exec($ch);

            if (curl_errno($ch)) {
                $err = sprintf("curl[%s] error[%s]", $url, curl_errno($ch) . ':' . curl_error($ch));
                $this->triggerError($err);
            }

            curl_close($ch);
        } else {
            $opts = array(
                'http' => array(
                    'method'  => 'POST',
                    'header'  => "Content-type: application/x-www-form-urlencoded\r\n" . "Content-Length: " . strlen($data) . "\r\n",
                    'content' => $data,
                    'timeout' => self::$connectTimeout + self::$socketTimeout
                )
            );
            $context = stream_context_create($opts);
            $data    = file_get_contents($url, false, $context);
        }

        return $data;
    }

    /**
     * @param $err
     */
    private function triggerError($err) {
        trigger_error($err);
    }
}
