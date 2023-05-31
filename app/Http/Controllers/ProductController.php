<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ProductController extends Controller
{
    
    public function get_all_products()
    {
        $products = Product::all();
        return response()->json(['products' => $products], 200);
    }

    public function add_product(Request $request)
    
    {
        $products = new Product();

        $products->name = $request->name;
        $products->menu_id = $request->menu_id;
        $products->price = $request->price;
        $products->stock = $request->stock;
        if ($request->photo != "") {
            $strpos = strpos($request->photo, ';');
            $sub = substr($request->photo,0,$strpos);
            $ex = explode('/',$sub[1]);
            $name = time().".".$ex;
            $img = Image::make($request->photo)->resize(117, 100);
            $upload_path = public_path()."/upload/";
            $img->save($upload_path.$name);
            $products->photo = $name;
        } else {
            $products->photo = "image.jpg";
        }

        $products->photo = $name;
        $products->save();
    }

    public function delete_product($id)
    {
        $product = Product::findOrFail($id);
        $image_path = public_path()."/upload";
        $image = $image_path. $product->photo;
        if (file_exists($image)) {
            @unlink($image);
        }
        $product->delete();
    }
}
    