import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../context/StoreContext";

const ThankYou = () => {

   const { orderDetails, } = useContext(StoreContext);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f2f2eb] poppins-regular">
        <div className="bg-white shadow-md rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 text-center">
          <h1 className="text-xl md:text-3xl text-[#1f818c] mb-4">
            Thank You for Your Order. {orderDetails.customerInfo.fullName}!
          </h1>
          <p className="text-md md:text-lg text-[#0d0d0d] mb-6">
            Your order has been successfully placed. We appreciate your business and hope you enjoy your purchase!
          </p>
          <Link to="/"
            className="text-[#f2f2eb] bg-[#1f818c] hover:bg-[#bf9999] py-2 px-6 text-md md:text-lg transition duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  };
  
  export default ThankYou;
  
  