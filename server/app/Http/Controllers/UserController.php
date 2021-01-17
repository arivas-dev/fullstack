<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(Request $user){
        $userToEdit = User::find(1);

        $userToEdit->name = $user->name;

        $return = $userToEdit->save();
        return $return;
    }
}
