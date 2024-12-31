import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext} from '../context/StoreContext';
import { FaPlus, FaMinus, FaStar } from 'react-icons/fa';
import { MdCheckCircle } from "react-icons/md";

const Product = () => {
  const { productId } = useParams();
  const { products, cart } = useContext(StoreContext);
  const [product, setProduct] = useState(false);
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [showHotMessageBox, setShowHotMessageBox] = useState("");
  const [hotToastMessage, setHotToastMessage] = useState("");

  const { addToCart, removeFromCart } = useContext(StoreContext);

  
  useEffect(() => {
    // Fetch the product based on the current productId
    const selectedProduct = products.find((item) => item.id === productId);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setImage(selectedProduct.image[0]);
      setQuantity(0); // Reset quantity when product changes
      
      // Check if the product is already in the cart and set its quantity
      const cartItem = cart.find((item) => item.id === productId);
      setQuantity(cartItem ? cartItem.quantity : 0);
      } else {
      setProduct(null); // If no product is found
    }
  }, [productId, cart]);


  const handleAddToCart = () => {
    if (product) {
      const {id, image, name, price, color} = product;
      addToCart({ id, image, name, price, color, quantity:1 });
      setQuantity(quantity +1);
    }
    // Show hot toast message
    setHotToastMessage(`Item added to cart with ${quantity+1} quantities!`);
    setShowHotMessageBox(true);
    setTimeout(() => { setShowHotMessageBox(false);}, 2000); 
  };
    
  const increaseQuantity = () => {
      setQuantity((prev) => prev + 1);
      handleAddToCart();
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      removeFromCart(product.id); // Call the context method to handle quantity update
      setQuantity((prev) => (prev > 1 ? prev - 1 : 0));
      
      // Show hot message
      setHotToastMessage(`Item quantity decreased to ${quantity-1}`);
      setShowHotMessageBox(true);
      setTimeout(() => { setShowHotMessageBox(false);}, 2000); 
    }
  };

  

  return product ? (
    <div className="bg-white py-12 px-4 lg:px-12 w-full">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-20 items-center justify-center">
        {/* Product Images */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-12">
          {/* Thumbnail Images */}
          <div className="flex gap-2 flex-row md:flex-col items-center justify-normal sm:w-[20%]">
            {product.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover cursor-pointer rounded-lg hover:ring-2 hover:ring-gray-400 transition-transform transform hover:scale-105"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full flex justify-center items-center">
            <img
              src={image}
              alt="Product"
              className="w-[100%] h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="flex-1 poppins-regular text-[#0d0d0d]">
          {/* Product Name */}
          <h1 className="text-xl lg:text-4xl mt-10 md:mt-0 mb-4">
            {product.name}
          </h1>

          {/* Category */}
          <p className="text-[#1f818c] text-sm mb-2">
            Category: {product.category}
          </p>

          {/* Color */}
          <p className="text-[#0d0d0d] text-sm mb-2 md:mb-4">
            Color: {product.color}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < product.rating ? 'text-yellow-500' : 'text-gray-300'} />
              ))}
            </div>
            <span className="ml-2 text-red-500 text-sm">({product.rating} / 5)</span>
          </div>

          {/* Stock Status */}
          <p className={`text-md mb-4 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </p>

          {/* Price */}
          <div className="flex items-center text-xl mb-2">
            ${product.price.toFixed(2)}
            {product.discount > 0 && (
              <span className="ml-4 text-sm text-[#1f818c] line-through">
                 ${(product.price + product.discount).toFixed(2)}
              </span>
            )}
          </div>

          {/* Taxes */}
          <p className="text-xs text-[#0d0d0d] mb-4">Inclusive of all taxes</p>

          {/* Offers */}
          <div className="mb-4 text-[#0d0d0d]">
            <h3 className="text-md mb-2">Offers:</h3>
            <p className="text-sm text-justify text-[#1f818c]">
              {product.offer}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={decreaseQuantity}
              className="p-2 rounded-full bg-[#f2f2eb]"
            >
              <FaMinus className="text-[#0d0d0d]" />
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border border-[#bfbdb4] rounded-md"
            />
            <button
              onClick={increaseQuantity} 
              className="p-2 rounded-full bg-[#f2f2eb]"
            >
              <FaPlus className="text-[#0d0d0d]" />
            </button>
          </div>
          <p className="text-sm text-[#0d0d0d] opacity-75 mb-4 w-full md:w-1/2 text-justify">
            {product.description}
          </p>

          {/* Add to Cart Button */}
          <button
            className={`px-6 py-3 text-white transition-colors ${
              product.inStock ? 'bg-[#0d0d0d] hover:bg-[#1f818c]' : 'bg-[#0d0d0d] opacity-35 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Hot Message */}
      {showHotMessageBox && (
      <div className="w-72 lg:w-96 absolute top-32 lg:top-20 right-1/2 transform translate-x-1/2 bg-[#1f818c] text-white px-6 py-3 rounded-lg shadow-lg text-sm lg:text-md poppins-regular flex items-center gap-2 animate-fade-in-out"
      >
         <MdCheckCircle className="text-white text-xl" size={30} />
            {hotToastMessage}
      </div>
      )}

    </div>
  ) : (
    <div className="text-center text-3xl text-[#1f818c]">Product Not Available!</div>
  );
};

export default Product;
