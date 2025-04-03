import React from "react";
import { usecart } from "../../../context/cartcontext";
import { findproductincart } from "../../../utils/findproductincart";
import { findproductinwishlist } from "../../../utils/findproductinwishlist";
import { useNavigate } from "react-router-dom";
function ProductCard({ product }) {
  const navigate = useNavigate();
  const { cart, cartdispatch ,wishlist} = usecart();
 
 
  const isproductincart = findproductincart(cart, product.id);
  const isproductinwishlist = findproductinwishlist(wishlist, product.id);
  const oncartclick = (product) => {
    !isproductincart 
      ? cartdispatch({
          type: "ADDTOCART",
          payload: { product },
        })
      : navigate("/cart");
  };
  const onwishlistclick=(product)=>{
!isproductinwishlist ? cartdispatch({
  type:"ADDTOWISHLIST",
  payload:{product}
}):navigate("/wishlist");
  }
//   console.log({wishlist});
  // console.log({cart});
  // const onwishlistclick = (product) => {
  //   !isproductinwishlist
  //     ? cartdispatch({
  //         type: "ADDTOWISHLIST",
  //         payload: { product },
  //       })
  //     : navigate("/wishlist");
  // };
  

  return (
    <div className="flex justify-center p-3 mt-4">
      <div className="bg-white shadow-lg rounded-xl p-4 w-[300px] h-[400px]  gap-3 flex flex-col items-center transition-transform transform hover:scale-105">
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={product.images[0]}
            alt={product.title}
          />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {product.title}
          </h2>
          <h3 className=" font-medium text-gray-800">
            category:{product.category.name}
          </h3>
          <p className="text-lg font-bold text-blue-600">Rs. {product.price}</p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => oncartclick(product)}
              className={`flex items-center gap-2 py-2 px-4 w-32 cursor-pointer rounded-lg shadow-md transition-colors duration-300 ${
                isproductincart
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white`}
            >
              {isproductincart ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fff"
                >
                  <path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fff"
                >
                  <path d="M280 -80q -33 0 -56.5 -23.5T200 -160q 0 -33 23.5 -56.5T280 -240q 33 0 56.5 23.5T360 -160q 0 33 -23.5 56.5T280 -80Zm400 0q -33 0 -56.5 -23.5T600 -160q 0 -33 23.5 -56.5T680 -240q 33 0 56.5 23.5T760 -160q 0 33 -23.5 56.5T680 -80ZM246 -720l96 200h280l110 -200H246Zm -38 -80h590q23 0 35 20.5t1 41.5L692 -482q -11 20 -29.5 31T622 -440H324l -44 80h480v80H280q -45 0 -68 -39.5t -2 -78.5l54 -98 -144 -304H40v -80h130l38 80Zm134 280h280z" />
                </svg>
              )}
              {isproductincart ? "Go to cart" : "Add To Cart"}
            </button>
            <button onClick={()=>onwishlistclick(product)}
              
              className={`flex items-center gap-2 py-2 px-4 w-32 cursor-pointer rounded-lg shadow-md transition-colors duration-300 ${
                isproductinwishlist
                  ? "bg-amber-400 hover:bg-amber-500"
                  : "bg-red-400 hover:bg-red-500"
              } text-white`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fff"
              >
                <path d="M0,0h24v24H0V0z" fill="none" />
                <path d="M12,21.35l1.45,-1.32C18.6,15.36,22,12.28,22,8.50C22,5.42,19.58,3,16.50,3c1.74,0,3.41,.81,4,.09C15,.81,14,.09,12,.09C9,.09,7,.81,6,.09C8-.81,9-.81,10-.81C12,-1,.09C13,-1,.09C14,-1,.09C15,-1,.09C16,-1,.09C17,-1,.09C18,-1,.09C19,-1,.09C20,-1,.09C21,-1,.09C22,-1,.09Z" />
              </svg>
              {isproductinwishlist? 'Go to Wishlist' :'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
