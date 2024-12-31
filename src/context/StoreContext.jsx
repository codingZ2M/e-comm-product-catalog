import { createContext, useState, useEffect } from "react";
import {products} from '../assets/assets'

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  
  // Add a state for order details
  const [orderDetails, setOrderDetails] = useState(() => {
    const savedOrderDetails = localStorage.getItem("orderDetails");
    return savedOrderDetails ? JSON.parse(savedOrderDetails) : null;
  });

  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage or default to an empty array
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

    const currency = '$';
    const deliveryFee = 20;
    const taxRate = 0.18; // 18% tax

    const [search, setSearch] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);

    
    useEffect(() => {
      // Persist cart state to localStorage on changes
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    }, [cart, orderDetails]);


 
    const addToCart = (product) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
          // Increment quantity if item exists
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          );
        }
        // Add new item with specified quantity
        return [...prevCart, { ...product }];
      });
    };
      console.log(cart);


      // Handle decreasing quantity or removing items
      const removeFromCart = (productId) => {
        setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item.id === productId);
          if (existingItem) {
            if (existingItem.quantity > 1) {
              // Decrease quantity if greater than 1
              return prevCart.map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              );
            } else {
              // Remove item if quantity is 1
              return prevCart.filter((item) => item.id !== productId);
            }
          }
          return prevCart; // Return unchanged if item is not in the cart
        });
      };
      

      // Remove the product with all quantities from cart
      const removeItemQuantities = (productId) => {
        setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item.id === productId);
          if (existingItem) {
            return prevCart.filter((item) => item.id !== productId);
          }
        })
      } 

      // Calculate total price for each product
      const getProductTotal = (product) => {
        return product.price * product.quantity;
      };

     // Calculate total cart price including delivery and tax
     const getTotalPrice = () => {
        const cartTotal = cart.reduce((total, item) => total + getProductTotal(item), 0);
        const tax = cartTotal * taxRate;
        const totalWithTaxAndDelivery = cartTotal + tax + deliveryFee;
      return {
        cartTotal,
        tax,
        deliveryFee,
        totalWithTaxAndDelivery,
      };
    };

    const getTotalCartItems = () => {
      return cart.reduce((total, item) => total + item.quantity, 0);
    };

  
    const value = {
        products,
        cart,
        getProductTotal,
        getTotalPrice,
        addToCart,
        removeFromCart,
        removeItemQuantities,
        getTotalCartItems,
        currency,
        deliveryFee,
        search,
        setSearch,
        showSearchBar,
        setShowSearchBar,
        setOrderDetails,
        orderDetails,
    }

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;