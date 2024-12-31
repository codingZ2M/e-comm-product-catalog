import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search } = useContext(StoreContext);

  const [selectedMainCategories, setSelectedMainCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [sortOption, setSortOption] = useState('low-high');

  const mainCategories = ['New Arrivals', 'Best Sellers', 'On Sale'];
  const subCategories = ['Wrist Watch', 'Headphones', 'Smart Watches', 'Bluetooth Speakers'];

  const handleCategoryChange = (category, setCategory) => {
    setCategory((prevCategories) => 
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category]
    );
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Filter products based on search, category, and subcategory
  const filteredProducts = products
    // Step 1: Apply the search filter
    .filter((product) => 
      !search || product.name.toLowerCase().includes(search.toLowerCase())
    )
  // Step 2: Apply main category and subcategory filters
    .filter((product) =>
      (selectedMainCategories.length === 0 || selectedMainCategories.includes(product.category)) &&
      (selectedSubCategories.length === 0 || selectedSubCategories.includes(product.subCategory))
    )
    .sort((a, b) => (sortOption === 'low-high' ? a.price - b.price : b.price - a.price));

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5 bg-white p-6 rounded-lg shadow-lg border">
        <h2 className="text-[#0d0d0d] text-lg poppins-regular mb-6">Filter by Category</h2>
        
        {/* Main Categories */}
        <div className="mb-6">
          <h3 className="text-[#1f818c] poppins-medium text-md mb-2">Main Categories</h3>
          <ul className="space-y-2">
            {mainCategories.map((category) => (
              <li key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
               /*     checked={selectedMainCategories.includes(category)} */
                  onChange={() => handleCategoryChange(category, setSelectedMainCategories)}
                  className="cursor-pointer"
                />
                <span className="text-[#0d0d0d]">{category}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Sub Categories */}
        <div className="mb-6">
          <h3 className="text-[#1f818c] poppins-medium text-md mb-2">Sub Categories</h3>
          <ul className="space-y-2">
            {subCategories.map((subCategory) => (
              <li key={subCategory} className="flex items-center space-x-2">
                <input
                  type="checkbox"
             /*     checked={selectedSubCategories.includes(subCategory)} */
                  onChange={() => handleCategoryChange(subCategory, setSelectedSubCategories)}
                  className="cursor-pointer"
                />
                <span className="text-[#0d0d0d]">{subCategory}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Products Section */}
      <main className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-6"> 
          {/* Sort Dropdown */}
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="poppins-regular text-md bg-white text-[#0d0d0d] p-2 rounded-md outline-none cursor-pointer"
          >
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Product Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductItem   key={index} 
                        id={product.id} 
                        image={product.image} 
                        name={product.name} 
                        price={product.price} 
                        color={product.color}
                        inStock={product.inStock}
          />
            ))
          ) : (
            <p className="text-[#1f818c] text-center text-2xl poppins-regular">No products found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Collection;
