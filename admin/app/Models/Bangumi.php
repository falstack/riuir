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
        'alias',
        'season',
        'release',
        'published_at',
        'count_like',
        'count_score'
    ];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function getAvatarAttribute($avatar)
    {
        return $avatar ? 'https://cdn.riuir.com/' . $avatar : 'https://cdn.riuir.com/avatar';
    }

    public function getBannerAttribute($banner)
    {
        return $banner ? 'https://cdn.riuir.com/' . $banner : 'https://cdn.riuir.com/B-banner';
    }
}
