import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import ProductItem from './ProductItem';

const NewArrivals = () => {
  const { products } = useContext(StoreContext);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const newArrivals = products.filter((item)=> (item.category === "New Arrivals"));
    setNewArrivals(newArrivals.slice(0, 8));
  }, [products]);

  return (
    <div className="px-4 lg:px-12 mt-10 lg:mt-24">
      <h1 className="poppins-regular text-3xl lg:text-5xl mb-2 lg:mb-6 text-[#0d0d0d]">New Arrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-8 lg:gap-y-16">
        {newArrivals.map((product, index) => (
          <ProductItem   key={index} 
                        id={product.id} 
                        image={product.image} 
                        name={product.name} 
                        price={product.price} 
                        color={product.color}
                        inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
