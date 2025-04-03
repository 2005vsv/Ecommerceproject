import React from "react";
import { useState } from "react";
import { usecart } from "../context/cartcontext";
import { findproductinwishlist } from "../utils/findproductinwishlist";
import { findproductincart } from "../utils/findproductincart";
import { useNavigate } from "react-router-dom";
function HorizontalProductCard({product}) {
  const { cartdispatch, wishlist,cart } = usecart();
  const isproductinwishlist = findproductinwishlist(wishlist, product.id);
  const isproductincart = findproductincart(cart, product.id);
  const [count,setcount]=useState(1);
  const navigate=useNavigate();
  const onremoveclick = (product) => {
    cartdispatch({
      type: "REMOVEFROMCART",
      payload: { id: product.id },
    })
  };
  const onremovewishlistclick=(product)=>{
    cartdispatch({
      type:'REMOVEFROMWISHLIST',
      payload:{id:product.id},
    })
  }
  const totalcartamount=product.price*count;
  // const onwishlistclick=(product)=>{
  //   !isproductinwishlist ?
  //   wishlistdispatch({
  //     type:'ADDTOWISHLIST',
  //     payload:{id:product.id}
  //   }):navigate('/wishlist');
  // }
  return (
    <div className="flex shadow-lg w-[500px] h-60 mt-16    rounded-lg overflow-hidden bg-white">
      <div className="relative w-1/3 h-60">
        <img
          className="w-full h-full object-cover"
          src={product.images[0]}
          alt="shoes"
        />
      </div>
      <div className="flex flex-col justify-between p-4 w-2/3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {product.title}
          </h3>
          <p className="text-lg font-bold text-blue-600">Rs. {totalcartamount}</p>
        </div>
        <div className="flex items-center mt-2">
          <span className="font-medium">Quantity: </span>
          <div className="flex items-center border border-gray-300 rounded ml-2">
            <button onClick={()=>setcount((count)=>count-1)} className="px-3 py-1 text-lg font-bold text-gray-700 hover:bg-gray-200 cursor-pointer">
              −
            </button>
            <span className="px-4 py-1 text-lg">{count}</span>
            <button onClick={()=>setcount((count)=>count+1)} className="px-3 py-1 text-lg font-bold text-gray-700 hover:bg-gray-200 cursor-pointer">
              +
            </button>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          {
            isproductincart && !isproductinwishlist ?<button
            onClick={() => onremoveclick(product)}
            className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Remove from Cart
          </button>: <button
            onClick={() => onremovewishlistclick(product)}
            className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Remove from Wishlist
          </button>
          }
         
          
          {/* <button
            onClick={() => onwishlistclick(product)}
            className="flex items-center justify-center border border-blue-600 text-blue-600 py-2 px-4 rounded shadow hover:bg-blue-600 hover:text-white transition duration-300"
          >
            {isproductinwishlist ? "Remove from Wishlist" : "Move to Wishlist"}
          </button> */}
        </div>
        
      </div>
    </div>
  );
}

export default HorizontalProductCard;
