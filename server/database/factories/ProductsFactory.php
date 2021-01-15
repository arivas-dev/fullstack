<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Products;

class ProductsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Products::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'SKU' => $this->faker->word,
            'name' => $this->faker->name,
            'quantity' => $this->faker->randomFloat(2, 0, 999999.99),
            'price' => $this->faker->randomFloat(2, 0, 999999.99),
            'description' => $this->faker->text,
            'image' => $this->faker->text,
        ];
    }
}
