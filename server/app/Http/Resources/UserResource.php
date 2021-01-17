<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'type' => 'users',
            'id' => $this->getRouteKey(),
            'attributes' => [
                'name' => $this->name,
                'email' => $this->email,
                'telephone' => $this->telephone,
                'username' => $this->username,
                'date_of_birth' => $this->date_of_birth,
            ],
            'links' => [
                'self' => route('api.v1.user.show',$this->resource)
            ]
        ];
    }
}
