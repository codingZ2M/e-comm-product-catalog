import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { FaMinus, FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Cart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    removeItemQuantities,
    getProductTotal,
    getTotalPrice,
    currency,
  } = useContext(StoreContext);

  const { cartTotal, tax, deliveryFee, totalWithTaxAndDelivery } = getTotalPrice();

  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-xl md:text-2xl poppins-medium text-[#1f818c] text-center mb-4 md:mb-12">
          Your Shopping Cart
        </h1>
        {cart.length === 0 ? (
          <p className="poppins-regular text-center text-xl text-[#bf9999]">
            Your cart is empty
          </p>
        ) : (
          <div className="poppins-regular rounded-xl shadow-md">
            <div className="overflow-x-auto">
              <table className="hidden md:table min-w-full bg-white">
                <thead className="bg-[#fff]">
                  <tr>
                    <th className="py-4 px-6 text-left text-[#0d0d0d] poppins-medium text-md">Product</th>
                    <th className="py-4 px-6 text-left text-[#0d0d0d] poppins-medium text-md">Price</th>
                    <th className="py-4 px-6 text-left text-[#0d0d0d] poppins-medium text-md">Color</th>
                    <th className="py-4 px-6 text-left text-[#0d0d0d] poppins-medium text-md">Quantity</th>
                    <th className="py-4 px-6 text-left text-[#0d0d0d] poppins-medium text-md">Total</th>
                    <th className="py-4 px-6 text-left text-[#0d0d0d] poppins-medium text-md">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(({ id, image, name, price, color, quantity }) => (
                    <tr key={id} className="border-b border-[#bfbdb4] poppins-regular text-[#0d0d0d] text-md">
                      <td className="py-4 px-6 flex items-center gap-4">
                      <Link to={`/product/${id}`} className="bg-white text-[#0d0d0d]">
                        <div className='flex items-center justify-center gap-4'>
                            <img src={image[0]} alt={name} className="w-16 h-16 object-cover rounded-lg"
                            />
                            <span className="">{name}</span>
                        </div>
                      </Link>
                      </td>
                      <td className="py-4 px-6">
                        {currency} {price}
                      </td>
                      <td className="py-4 px-6">{color}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromCart(id)}
                            className="p-2 rounded-full bg-[#f2f2eb] text-[#0d0d0d] hover:bg-[#bfbdb4] transition"
                          >
                            <FaMinus />
                          </button>
                          <span className="">{quantity}</span>
                          <button
                            onClick={() =>
                              addToCart({ id, image, name, price, color, quantity: 1 })
                            }
                            className="p-2 rounded-full bg-[#f2f2eb] text-[#0d0d0d] hover:bg-[#bfbdb4] transition"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        {currency}
                        {getProductTotal({
                          id,
                          image,
                          name,
                          price,
                          color,
                          quantity,
                        })}
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => removeItemQuantities(id)}
                          className="text-[#bf9999] hover:text-[#0d0d0d] transition"
                        >
                          <FaRegTrashAlt size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile view */}
              <div className="block md:hidden p-2 text-sm poppins-regular">
                {cart.map(({ id, image, name, price, color, quantity }) => (
                  <div key={id} className="border-b border-[#f2f2eb] py-4">
                    <div className="flex gap-4 items-center">
                    <Link to={`/product/${id}`} className="block bg-white text-[#0d0d0d] ">
                      <img src={image[0]} alt={name} className="w-16 h-16 object-cover rounded-lg"
                      />
                    </Link>
                      <div className="flex-1">
                      <Link to={`/product/${id}`} className="block bg-white text-[#0d0d0d] ">
                        <p className="text-[#1f818c]">{name}</p>
                      </Link>
                        <div className='flex items-center justify-between'>
                          <p className="text-[#0d0d0d]">Price: {currency}{price}</p>
                          <p className="text-[#0d0d0d]">Color: {color}</p>
                        </div>
                        <p className="text-[#0d0d0d]">
                          Total: {currency}
                          {getProductTotal({
                            id,
                            image,
                            name,
                            price,
                            color,
                            quantity,
                          })}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => removeFromCart(id)}
                            className="p-2 rounded-full bg-[#f2f2eb] text-[#0d0d0d] hover:bg-[#bfbdb4] transition"
                          >
                            <FaMinus />
                          </button>
                          <span className="text-[#0d0d0d] font-medium">{quantity}</span>
                          <button
                            onClick={() =>
                              addToCart({ id, image, name, price, color, quantity: 1 })
                            }
                            className="p-2 rounded-full bg-[#f2f2eb] text-[#0d0d0d] hover:bg-[#bfbdb4] transition"
                          >
                            <FaPlus />
                          </button>
                          <button
                            onClick={() => removeItemQuantities(id)}
                            className="text-[#bf9999] hover:text-[#0d0d0d] transition ml-auto"
                          >
                            <FaRegTrashAlt size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* Cart Items Total Summary */}  
            <div className="p-6 bg-[#fff] mt-4 poppins-medium text-sm md:text-md">
              <div className="flex justify-between text-[#0d0d0d]">
                <span>Subtotal:</span>
                <span>{currency}{cartTotal}</span>
              </div>
              <div className="flex justify-between text-[#0d0d0d]">
                <span>Tax (18%):</span>
                <span>{currency}{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#0d0d0d]">
                <span>Delivery Fee:</span>
                <span>{currency}{deliveryFee}</span>
              </div>
              <div className="mt-4 text-lg md:text-xl text-[#1f818c] flex justify-between">
                <span>Total:</span>
                <span>{currency}{totalWithTaxAndDelivery.toFixed(2)}</span>
              </div>
            </div>
            <div className='flex items-center justify-center lg:justify-end p-4'>
              <button onClick={() => navigate('/checkout')}
                      className="mt-4 w-60 py-3 bg-[#0d0d0d] text-[#f2f2eb] text-center hover:bg-[#1f818c] transition poppins-medium"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
