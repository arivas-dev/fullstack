<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Models\Products;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    public function index (){

        if(request('sort')){
            $products = Products::applySorts(request('sort'))->paginate();
        }else{
            $products = Products::paginate();
        }

        return ProductCollection::make(
            $products
        );
    }
    public function show (Products $product){
        return ProductResource::make($product);
    }
}
