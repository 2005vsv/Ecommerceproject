import React from "react";
import Navbar from "../../../Components/Navbar";
import { usecart } from "../../../context/cartcontext";
import HorizontalProductCard from "../../../Horizontalproductcard";


function Wishlist() {
  const { wishlist } = usecart();

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-6">
        <h1 className="text-black text-2xl font-bold mb-4 pt-14">My Wishlist</h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full max-w-6xl">
          <div className="flex flex-col gap-4 w-full md:w-2/3">
            {wishlist?.length > 0 ? (
              wishlist.map((product) => (
                <HorizontalProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-black text-4xl mt-10 text-center">
                Your Wishlist is empty
              </p>
            )}
          </div>
          
        </div>
      </main>
    </>
  );
}

export default Wishlist;
