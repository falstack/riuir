<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Video extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'url',
        'name',
        'poster',
        'bangumi_id',
        'part',
        'count_played',
        'count_comment'
    ];

    public function bangumi()
    {
        return $this->belongsTo(Bangumi::class, 'id', 'bangumi_id');
    }

    public function getUrlAttribute($url)
    {
        return 'http://cdn.riuir.com/' . $url;
    }
}