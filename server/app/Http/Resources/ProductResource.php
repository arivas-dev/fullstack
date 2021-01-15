<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
                'type' => 'products',
                'id' => $this->getRouteKey(),
                'attributes' => [
                    'SKU' => $this->SKU,
                    'name' => $this->name,
                    'quantity' => $this->quantity,
                    'price' => $this->price,
                    'description' => $this->description,
                ],
                'links' => [
                    'self' => route('api.v1.products.show',$this->resource)
                ]
            ];
    }
}
