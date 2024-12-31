import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {
    cart,
    getProductTotal,
    getTotalPrice,
    currency,
    deliveryFee,
    setOrderDetails,
  } = useContext(StoreContext);

  const { cartTotal, tax, totalWithTaxAndDelivery } = getTotalPrice();
  const navigate = useNavigate(); // Hook for navigation
  
  const { register, handleSubmit, formState: { errors },} = useForm();


  const onSubmit = (data) => {
    const orderDetails = {
      customerInfo: data, // Form data
      cartItems: cart,    // Cart items
      totals: {           // Totals including tax and delivery fee
        cartTotal,
        tax,
        deliveryFee,
        totalWithTaxAndDelivery,
      },
    };
    setOrderDetails(orderDetails); // Save order details in context
    console.log("Order Details Saved: ", orderDetails);
  
    // Redirect to the "Thank You" page after submission
    navigate("/thank-you");
  };

  return (
    <div className="p-8 poppins-regular bg-white text-[#0d0d0d]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
       
        {/* Left Side: Checkout Form */}
        <div className="space-y-6">
          <h2 className="text-xl lg:text-3xl text-[#1f818c]">Checkout</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: "Full name is required" })}
              className="w-full border border-[#bfbdb4] rounded-lg p-4 h-12 text-[#0d0d0d] focus:outline-none focus:border-[#1f818c]"
            />
            {errors.fullName && (
              <p className="text-[#bf9999] text-sm">{errors.fullName.message}</p>
            )}

            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full border border-[#bfbdb4] rounded-lg p-4 h-12 text-[#0d0d0d] focus:outline-none focus:border-[#1f818c]"
            />
            {errors.email && (
              <p className="text-[#bf9999] text-sm">{errors.email.message}</p>
            )}

            <input
              type="text"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              className="w-full border border-[#bfbdb4] rounded-lg p-4 h-12 text-[#0d0d0d] focus:outline-none focus:border-[#1f818c]"
            />
            {errors.phone && (
              <p className="text-[#bf9999] text-sm">{errors.phone.message}</p>
            )}

            <input
              type="text"
              placeholder="Shipping Address"
              {...register("address", { required: "Address is required" })}
              className="w-full border border-[#bfbdb4] rounded-lg p-4 h-12 text-[#0d0d0d] focus:outline-none focus:border-[#1f818c]"
            />
            {errors.address && (
              <p className="text-[#bf9999] text-sm">{errors.address.message}</p>
            )}

            <input
              type="text"
              placeholder="City"
              {...register("city", { required: "City is required" })}
              className="w-full border border-[#bfbdb4] rounded-lg p-4 h-12 text-[#0d0d0d] focus:outline-none focus:border-[#1f818c]"
            />
            {errors.city && (
              <p className="text-[#bf9999] text-sm">{errors.city.message}</p>
            )}

            <input
              type="text"
              placeholder="Postal Code"
              {...register("postalCode", {
                required: "Postal code is required",
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: "Postal code must be 5 digits",
                },
              })}
              className="w-full border border-[#bfbdb4] rounded-lg p-4 h-12 text-[#0d0d0d] focus:outline-none focus:border-[#1f818c]"
            />
            {errors.postalCode && (
              <p className="text-[#bf9999] text-sm">{errors.postalCode.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#1f818c] text-white p-4 h-12 rounded-lg hover:bg-[#bf9999] transition duration-300"
            >
              Place Order
            </button>
          </form>
        </div>


        {/* Right Side: Cart Details */}
        <div className="space-y-6 mt-10">
          <h2 className="text-xl md:text-2xl text-[#1f818c]">
            Order Summary
          </h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-[#bfbdb4] pb-4"
              >
                <div className="text-[#0d0d0d]">
                  <p className="text-sm">{item.name}</p>
                  <p className="text-sm text-[#bf9999]">
                    {item.quantity} x {currency}
                    {item.price.toFixed(2)}
                  </p>
                </div>
                <p className="text-[#0d0d0d] text-sm">
                  {currency}
                  {getProductTotal(item).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-[#bfbdb4] pt-4">
            <div className="flex justify-between text-md">
              <p className="text-[#0d0d0d]">Subtotal:</p>
              <p className="text-[#0d0d0d]">
                {currency}
                {cartTotal.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-md">
              <p className="text-[#0d0d0d]">Tax:</p>
              <p className="text-[#0d0d0d]">
                {currency}
                {tax.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-md">
              <p className="text-[#0d0d0d]">Delivery Fee:</p>
              <p className="text-[#0d0d0d]">
                {currency}
                {deliveryFee.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex justify-between border-t border-[#bfbdb4] pt-4 text-lg md:text-xl  text-[#1f818c]">
            <p>Total:</p>
            <p> {currency} {totalWithTaxAndDelivery.toFixed(2)} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
