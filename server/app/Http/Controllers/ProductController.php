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
            'image' => 'string',
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

    public function update(Request $request, $id)
    {
        if (Products::where('id', $id)->exists()) {
            $validator = Validator::make($request->all(), [
                'SKU' => 'required|string|max:255',
                'name' => 'required|string|max:255',
                'quantity' => 'required|string',
                'price' => 'required|string',
                'description' => 'string',
                'image' => 'string',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }

            $product = Products::find($id);

            $product->SKU = $request->get('SKU');
            $product->name = $request->get('name');
            $product->quantity = $request->get('quantity');
            $product->price = $request->get('price');
            $product->description = $request->get('description');
            $product->image = $request->get('image');

            $product->save();

            return response()->json([
                "message" => "Product updated"
            ], 200);
        } else {
            return response()->json([
                "message" => "Product not found"
            ], 404);
        }
    }
    public function delete(Request $request, $id)
    {
        if (Products::where('id', $id)->exists()) {


            $product = Products::find($id);

            $product->delete();
            return response()->json([
                "message" => "Product deleted"
            ], 202);
        } else {
            return response()->json([
                "message" => "Product not found"
            ], 404);
        }
    }
}
