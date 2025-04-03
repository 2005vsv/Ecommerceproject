import React from "react";
import Navbar from "../../../Components/Navbar";
import { usecart } from "../../../context/cartcontext";
import HorizontalProductCard from "../../../Horizontalproductcard";
import Pricedetails from "../../../pricedetails";

function Cart() {
  const { cart } = usecart();

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-6">
        <h1 className="text-black text-2xl font-bold mb-4">My Cart</h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full max-w-6xl">
          <div className="flex flex-col gap-4 w-full md:w-2/3">
            {cart?.length > 0 ? (
              cart.map((product) => (
                <HorizontalProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-black text-4xl mt-10 text-center">
                Your Cart is empty
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3">
            <Pricedetails />
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;
