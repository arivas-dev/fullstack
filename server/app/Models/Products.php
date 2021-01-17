<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    protected $fillable = [
        'id',
        'SKU',
        'name',
        'quantity',
        'price',
        'description',
        'image',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'quantity' => 'decimal:2',
        'price' => 'decimal:2',
    ];
    public function scopeApplySorts(Builder $query,$sort){
        $sortFields = Str::of($sort)->explode(',');

        foreach ($sortFields as $sortField) {
            $direction = 'asc';
            if(Str::of(request('sort'))->startsWith('-')){
                $direction = 'desc';
                $sortField = Str::of($sortField)->substr((1));
            }
        }

        $query->orderBy($sortField,$direction);
    }
}
