import React, {useState, useContext} from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";
import { MdCheckCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';


const ProductItem = ({ id, image, name, price, color, inStock}) => {
  
  const { addToCart } = useContext(StoreContext);
  const [showHotMessage, setShowHotMessage] = useState(false);

  const handleAddToCart = () => {
      addToCart({ id, image, name, price, color, quantity:1 });
      
      // Show hot message
      setShowHotMessage(true);

      // Hide hot message after 2 seconds
      setTimeout(() => {
        setShowHotMessage(false);
      }, 2000);
    }

  return (
    <div className="relative p-2 border-none rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Product Image with Link */}
      <Link to={`/product/${id}`} className="block p-2 bg-white text-[#0d0d0d] ">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-96 object-cover rounded-md mb-2"
        />
      </Link>

      {/* Product Details */}
      <div className='px-2 mt-2 flex items-center justify-between poppins-regular text-lg  text-[#0d0d0d]'>
          <p className="">{name}</p>
          <p className=" ">${price}</p>
      </div>

      {/* Shopping Cart Icon */}
      <div className={`absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg ${
                       inStock ? 'hover:bg-[#1f818c] cursor-pointer' : 'cursor-not-allowed'
                      }`}
                      onClick={inStock ? handleAddToCart : null} // Disable click if out of stock
      >
         { inStock ? 
            <GiShoppingCart className='text-[#0d0d0d]' size={26}/>
            :
            <CgCloseO className='text-red-600' size={26}/>
         }
      </div>

        {/* Hot Message */}
        {showHotMessage && (
        <div className="w-64 absolute top-20 right-1/2 transform translate-x-1/2 bg-[#1f818c] text-white px-6 py-3 rounded-lg shadow-lg text-md poppins-regular flex items-center gap-2 animate-fade-in-out"
        >
            <MdCheckCircle className="text-white text-xl" size={30} />
             Item added to cart!
        </div>
        )}

    </div>
  );
};

export default ProductItem;
