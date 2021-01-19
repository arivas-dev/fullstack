<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'id'       => 50,
                'SKU'       => '123-1',
                'name'       => 'Oakley Valve Sunglasses',
                'quantity'     => 12,
                'price'     => 3,
                'description'     => '100% Authentic Oakley Sunglasses!',
                'image'     => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id'       => 51,
                'SKU'       => '123-2',
                'name'       => 'Huawei freebuds',
                'quantity'     => 10,
                'price'     => 219,
                'description'     => 'Huawei freebuds pro True Wireless Wireless Earbuds Redefine Noise Cancellation',
                'image'     => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id'       => 52,
                'SKU'       => '123-3',
                'name'       => 'Pet Backpack',
                'quantity'     => 10,
                'price'     => 45,
                'description'     => 'Pet Backpack Carrier Small Dog Cat Portable Travel Bag Transparent Capsule Space',
                'image'     => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
