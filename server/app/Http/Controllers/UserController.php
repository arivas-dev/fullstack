<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\Products;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index()
    {

        if (request('sort')) {
            $users = User::applySorts(request('sort'))->paginate();
        } else {
            $users = User::paginate();
        }

        return UserCollection::make(
            $users
        );
    }

    public function show(Products $id)
    {
        return UserResource::make($id);
    }

    public function update(Request $request,$id){

        if(User::where('id', $id)->exists()){
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'telephone' => 'required|integer',
                'email' => 'required|string',
                'date_of_birth' => 'required|string',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }

            $userEditing = User::find($id);
            $userEditing->name = $request->get('name');
            $userEditing->telephone = $request->get('telephone');
            $userEditing->email = $request->get('email');
            $userEditing->date_of_birth = $request->get('date_of_birth');

            $userEditing->save();
            return response()->json([
                "message" => "User updated"
            ], 200);

        }else{
            return response()->json([
                "message" => "User not found"
            ], 404);
        }
    }

    public function delete(Request $request, $id)
    {
        if (User::where('id', $id)->exists()) {


            $user = User::find($id);

            $user->delete();
            return response()->json([
                "message" => "User deleted"
            ], 202);
        } else {
            return response()->json([
                "message" => "User not found"
            ], 404);
        }
    }
}
