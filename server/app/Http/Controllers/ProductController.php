<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Models\Products;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ProductController extends Controller
{
    public function index()
    {

        if (request('sort')) {
            $products = Products::applySorts(request('sort'))->paginate();
        } else {
            $products = Products::paginate();
        }

        return ProductCollection::make(
            $products
        );
    }
    public function show(Products $product)
    {
        return ProductResource::make($product);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'SKU' => 'required|string|max:255|unique:products',
            'name' => 'required|string|max:255',
            'quantity' => 'required|string',
            'price' => 'required|string',
            'description' => 'required|string',
            'image' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        Products::create([
            'SKU' => $request->get('SKU'),
            'name' => $request->get('name'),
            'quantity' => $request->get('quantity'),
            'price' => $request->get('price'),
            'description' => $request->get('description'),
            'image' => $request->get('image')
        ]);

        return response()->json([
            "message" => "Product created"
          ], 201);
    }

    public function update(Request $request,$id)
    {
        $validator = Validator::make($request->all(), [
            'SKU' => 'required|string|max:255|unique:products',
            'name' => 'required|string|max:255',
            'quantity' => 'required|string',
            'price' => 'required|string',
            'description' => 'required|string',
            'image' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $userToEdit = User::find($id);

        $userToEdit->SKU = $request->get('SKU');
        $userToEdit->name = $request->get('name');
        $userToEdit->quantity = $request->get('quantity');
        $userToEdit->price = $request->get('price');
        $userToEdit->description = $request->get('description');
        $userToEdit->image = $request->get('image');

        $userToEdit->save();

        return response()->json([
            "message" => "Product updated"
          ], 200);
    }
}
