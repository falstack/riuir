<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use App\Models\Video;
use Illuminate\Support\Facades\Cache;

class VideoController extends Controller
{
    public function info($id)
    {
        $data = Cache::remember('video_info_' . $id, env('CACHE_TTL'), function () use ($id)
        {
            $info = Video::find($id);

            return json_encode([
                'info' => $info,
                'videos' => Video::where('bangumi_id', $info->bangumi_id)->get(),
                'bangumi' => Bangumi::find($info->bangumi_id)
            ]);
        });

        return $data;
    }

    public function generate()
    {
        return Video::all()->pluck('id');
    }

    public function playing($id)
    {
        $key = 'video_played_counter_' . $id;
        $value = Cache::rememberForever($key, function () use ($id)
        {
            return [
                'data' => Video::where('id', $id)->select('count_played')->first()->count_played,
                'time' => time()
            ];
        });

        $value['data']++;
        if (time() - $value['time'] > env('CACHE_TTL') * 60)
        {
            $value['time'] = time();
            Video::find($id)->update([
                'count_played' => $value['data']
            ]);
        }

        Cache::forever($key, $value);
    }
}
