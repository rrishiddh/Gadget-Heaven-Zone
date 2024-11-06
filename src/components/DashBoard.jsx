import { useContext, useEffect, useState } from "react";
import {
  previousCartData,
  removeFromCart,
  removeFromWishlist,
  previousWishlistData,
  addToCart,
} from ".";
import "react-responsive-modal/styles.css";
import { useNavigate } from "react-router-dom";
import { CartProduct } from "./Root";


const DashBoard = () => {
  const { cartLength, addToCart, handleRemoveFromCart } = useContext(CartProduct);

  const [cartProduct, setCartProduct] = useState([]);
  const [showSection, setShowSection] = useState("cart");

  useEffect(() => {
    const addedToCart = previousCartData();
    setCartProduct(addedToCart);
    calculateTotalPrice(addedToCart);
    
  }, []);

 

  const handelRemoveFromCart = (id) => {
    removeFromCart(id);
    const updatedCart = previousCartData();
    setCartProduct(updatedCart);
    calculateTotalPrice(updatedCart);
    handleRemoveFromCart(id);
    
  };

  // wishlist
  const [wishlistProduct, setWishlistProduct] = useState([]);
  useEffect(() => {
    const addedToWishlist = previousWishlistData();
    setWishlistProduct(addedToWishlist);
  }, []);

  const handelRemoveFromWishlist = (id) => {
    removeFromWishlist(id);
    const updatedWishlist = previousWishlistData();
    setWishlistProduct(updatedWishlist);
  };

  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((present, item) => present + item.price, 0);
    setTotalPrice(total);
  };

  const sortCartByPriceDesc = () => {
    const sortedCart = [...cartProduct].sort((a, b) => b.price - a.price);
    setCartProduct(sortedCart);
  };

  const [open, setOpen] = useState(false);

  

  const navigate = useNavigate();

  const handlePurchase = () => {
    setOpen(true); 
    setCartProduct([]); 
    setTotalPrice(0); 
    localStorage.removeItem("cartAdded"); 
    handleRemoveFromCart();

  };

  const handleCloseModal = () => {
    setOpen(false);
    navigate("/");
  };

  

  return (
    <div>
      <div className="bg-[#9538E2] ">
        <div className="max-w-screen-2xl w-[90%] mx-auto ">
          <div className="  text-center space-y-6  rounded-xl pt-6 text-white pb-20">
            <h1 className="text-3xl md:text-5xl font-bold w-[80%] mx-auto">
              Dashboard
            </h1>
            <p className="lg:w-[60%] w-[80%] mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart device to the coolest accessories, we have
              it all! Explore the latest gadgets and tech trends that will revolutionize your life. 
            </p>
            <div className=" space-x-2">
              <button
                onClick={() => setShowSection("cart")}
                className={`btn rounded-full font-bold px-8 ${
                  showSection === "cart"
                    ? "bg-white text-[#9538E2]"
                    : "text-[#9538E2]"
                }`}
              >
                Cart
              </button>
              <button
                onClick={() => setShowSection("wishlist")}
                className={`btn rounded-full font-bold px-8 ${
                  showSection === "wishlist"
                    ? "bg-white text-[#9538E2]"
                    : "text-[#9538E2]"
                }`}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl w-[90%] mx-auto">
        {/* cart  */}
        {showSection === "cart" && (
          <div className="max-w-screen-2xl w-[90%] mx-auto space-y-6 mb-20 mt-10">
            <div className="space-y-6 ">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Cart</h1>
                <div className="flex gap-4 items-center">
                  <h1 className="font-bold">Total Price: $ {totalPrice}</h1>
                  <button
                    onClick={sortCartByPriceDesc}
                    className="btn border-2 border-[#ae4aff] rounded-full text-[#ae4aff]"
                  >
                    Sort By Price <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=21636&format=png&color=000000" alt="" />
                  </button>
                  
                  <button onClick={handlePurchase}
                    disabled={totalPrice === 0}  className="btn rounded-full bg-[#ae4aff] text-white">Purchase</button>                  
                </div>
              </div>

              {cartProduct.map((singleGadget, idx) => (
                <div
                  key={idx}
                  className="lg:grid gap-10 space-y-6 lg:grid-cols-12 justify-between card bg-base-100 w-[80%] mx-auto shadow-xl"
                >
                  <div className="flex space-y-6 col-span-11 gap-4">
                    <div className="p-4 h">
                      <img
                        className="h-[100%] w-[100%] object-cover justify-center"
                        src={singleGadget.product_image}
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="space-y-3 pt-8">
                        <h2 className="text-2xl font-bold">
                          {singleGadget.product_title}
                        </h2>
                        <p className="font-thin">{singleGadget.description}</p>
                        <p className="text-xl font-bold">
                          Price: $ {singleGadget.price}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div
                      onClick={() =>
                        handelRemoveFromCart(singleGadget.product_id)
                      }
                    >
                      <img
                        className="w-6 h-6"
                        src="https://img.icons8.com/?size=100&id=114052&format=png&color=000000"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* wishlist  */}
        {showSection === "wishlist" && (
          <div className="max-w-screen-2xl w-[90%] mx-auto space-y-6 mb-20 mt-10">
            <div className="space-y-6 ">
              <h1 className="text-2xl font-bold">Wishlist</h1>

              {wishlistProduct.map((singleGadget, idx) => (
                <div
                  key={idx}
                  className="grid gap-10 space-y-6 grid-cols-12 justify-between card bg-base-100 w-[80%] mx-auto shadow-xl"
                >
                  <div className="flex space-y-6 col-span-11 gap-4">
                    <div className="p-4 h">
                      <img
                        className="h-[100%] w-[100%] object-cover justify-center"
                        src={singleGadget.product_image}
                        alt=""
                      />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold">{singleGadget.product_title}</h2>
                      <p  className="font-thin">{singleGadget.description}</p>
                      <p  className="text-xl font-bold pb-2">Price: $ {singleGadget.price}</p>                      
                    </div>
                    
                  </div>
                  <div className="col-span-1">
                    <div
                      onClick={() =>
                        handelRemoveFromWishlist(singleGadget.product_id)
                      }
                    >
                      <img
                        className="w-6 h-6"
                        src="https://img.icons8.com/?size=100&id=114052&format=png&color=000000"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {open && (
        <div className="modal-box mx-auto ">
          <div className="bg-white rounded-lg p-8 space-y-4 max-w-md w-full text-center">
          <img className="mx-auto w-32" src="https://img.icons8.com/?size=100&id=91260&format=png&color=000000" alt="" />
            <h2 className="text-2xl font-bold">Congratulations!</h2>
            <h2 className="text-xl font-black">Payment Successful!</h2>            
            <button onClick={handleCloseModal} className="btn bg-blue-500 text-white rounded-full px-6 py-2 mt-4">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
