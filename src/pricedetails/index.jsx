import React from "react";
import { usecart } from "../context/cartcontext";
import { gettotalcartamount } from "../utils/gettotalcartamount";

function PriceDetails() {
  const { cart } = usecart();
  const totalcartamount=gettotalcartamount(cart);

  // Calculate total price and delivery charge (you may want to replace these with actual values)
  const itemCount = cart.length;
   // Example total price
  // Example delivery charge
  const deliveryCharge = 20; 
  const totalAmount = totalcartamount + deliveryCharge;
  
 

  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 mt-24 mx-auto">
      <h2 className="text-xl font-semibold text-gray-800">Price Details</h2>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">price ({itemCount}) items</p>
          <p className="font-bold text-gray-800">Rs. {totalcartamount}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Delivery Charge</p>
          <p className="font-bold text-gray-800">Rs. {deliveryCharge}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 border-t pt-4">
        <p className="font-semibold">Total Amount</p>
        <p className="font-bold text-lg text-gray-800">Rs. {totalAmount}</p>
      </div>

      <button className="w-full bg-emerald-500 text-white text-lg font-semibold py-2 rounded-lg mt-6 hover:bg-emerald-600 transition duration-300">
        Place Order
      </button>
    </div>
  );
}

export default PriceDetails;
