<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bangumi extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'summary',
        'avatar',
        'banner',
        'count_like',
        'count_score'
    ];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function getAvatarAttribute($avatar)
    {
        return $avatar ? 'http://cdn.riuir.com/' . $avatar : 'http://cdn.riuir.com/avatar';
    }

    public function getBannerAttribute($banner)
    {
        return $banner ? 'http://cdn.riuir.com/' . $banner : 'http://cdn.riuir.com/B-banner';
    }
}
