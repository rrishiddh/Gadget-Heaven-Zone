import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./Navbar";
import { Toaster } from 'react-hot-toast';
import { createContext, useState } from "react";
import { previousCartData, addToCart as addProductToLocalStorage, removeFromCart } from "./index"; 
import { HelmetProvider } from "react-helmet-async";


export const CartProduct = createContext([]);

const Root = () => {
    const [cartLength, setCartLength] = useState(previousCartData());
    const addToCart = (product) => {
        addProductToLocalStorage(product);
        const updatedCart = previousCartData(); 
        setCartLength(updatedCart); 
      };
    
      const handleRemoveFromCart = (id) => {
        removeFromCart(id); 
        const updatedCart = previousCartData(); 
        setCartLength(updatedCart); 
      };

    return (
        <div className="bg-[#F7F7F7]">
          <HelmetProvider>
            <CartProduct.Provider value={{cartLength, addToCart, handleRemoveFromCart}}>
            <Navbar></Navbar>
            <Outlet ></Outlet>
            <Toaster />
            <Footer></Footer>
            </CartProduct.Provider>
            </HelmetProvider>
        </div>
    );
};

export default Root;