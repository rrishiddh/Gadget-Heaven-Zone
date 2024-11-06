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
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const DashBoard = () => {
  const { cartLength, addToCart, handleRemoveFromCart } =
    useContext(CartProduct);

  const [cartProduct, setCartProduct] = useState([]);
  const [showSection, setShowSection] = useState("cart");

  useEffect(() => {
    const addedToCart = previousCartData();
    setCartProduct(addedToCart);
    calculateTotalPrice(addedToCart);
  }, []);

  const handelRemoveFromCart = (id) => {
    removeFromCart(id);
    toast.success("Successfully Removed From Cart!");

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

  const navigate = useNavigate();

  const handlePurchase = () => {
    const modal = document.getElementById("purchaseModal");

    setCartProduct([]);
    setTotalPrice(0);
    localStorage.removeItem("cartAdded");
    handleRemoveFromCart();
    if (modal) modal.showModal();
  };

  const handleCloseModal = () => {
    navigate("/");
  };

  return (
    <div>
      <Helmet>
        <title> Dashboard</title>
      </Helmet>
      <div className="bg-[#9538E2] ">
        <div className="max-w-screen-2xl w-[90%] mx-auto ">
          <div className="  text-center space-y-6  rounded-xl pt-6 text-white pb-20">
            <h1 className="text-3xl md:text-5xl font-bold w-[80%] mx-auto">
              Dashboard
            </h1>
            <p className="lg:w-[60%] w-[80%] mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart device to the coolest accessories, we have
              it all! Explore the latest gadgets and tech trends that will
              revolutionize your life.
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
              <div className="flex justify-between max-sm:flex-col">
                <h1 className="text-3xl font-bold max-sm:text-center max-sm:pb-2">
                  Cart
                </h1>
                <div className="flex gap-4 items-center">
                  <h1 className="font-bold">Total Price: $ {totalPrice}</h1>
                  <button
                    onClick={sortCartByPriceDesc}
                    className="btn border-2 border-[#ae4aff] rounded-full text-[#ae4aff]"
                  >
                    Sort By Price{" "}
                    <img
                      className="w-6 h-6"
                      src="https://img.icons8.com/?size=100&id=21636&format=png&color=000000"
                      alt=""
                    />
                  </button>

                  <button
                    onClick={handlePurchase}
                    disabled={totalPrice === 0}
                    className="btn rounded-full bg-[#ae4aff] text-white"
                  >
                    Purchase
                  </button>
                </div>
              </div>

              {cartProduct.map((singleGadget, idx) => (
                <div
                  key={idx}
                  className="grid gap-10 space-y-6 grid-cols-1 md:grid-cols-2 justify-between card bg-base-100 w-[80%] mx-auto shadow-xl"
                >
                  <div className="p-4">
                    <img
                      className="h-[100%] w-[100%] object-cover justify-center rounded-lg"
                      src={singleGadget.product_image}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="space-y-3 p-4">
                      <h2 className="text-2xl font-bold">
                        {singleGadget.product_title}
                      </h2>
                      <p className="font-thin">{singleGadget.description}</p>
                      <p className="text-xl font-bold">
                        Price: $ {singleGadget.price}
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-8 -right-3">
                    <div
                      onClick={() =>
                        handelRemoveFromCart(singleGadget.product_id)
                      }
                    >
                      <img
                        className="w-10 h-10"
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
              <h1 className="text-3xl max-sm:text-center font-bold">Wishlist</h1>

              {wishlistProduct.map((singleGadget, idx) => (
                <div
                  key={idx}
                  className="grid gap-10 space-y-6 grid-cols-1 md:grid-cols-2 justify-between card bg-base-100 w-[80%] mx-auto shadow-xl"
                >
                  <div className="p-4 ">
                    <img
                      className="h-[100%] w-[100%] object-cover justify-center rounded-lg"
                      src={singleGadget.product_image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-3 p-4">
                    <h2 className="text-2xl font-bold">
                      {singleGadget.product_title}
                    </h2>
                    <p className="font-thin">{singleGadget.description}</p>
                    <p className="text-xl font-bold pb-2">
                      Price: $ {singleGadget.price}
                    </p>
                  </div>

                  <div className="absolute -top-8 -right-3">
                    <div
                      onClick={() =>
                        handelRemoveFromWishlist(singleGadget.product_id)
                      }
                    >
                      <img
                        className="w-10 h-10"
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

      <dialog id="purchaseModal" className="modal">
        <div className="modal-box ">
          <img
            className="mx-auto w-32"
            src="https://img.icons8.com/?size=100&id=91260&format=png&color=000000"
            alt=""
          />
          <div className=" text-center">
            <h2 className="text-2xl font-bold">Congratulations!</h2>
            <h2 className="pt-1 font-black pb-4">Payment Successful!</h2>
            <hr className="w-[60%] mx-auto" />
            <p className="pt-4 font-thin">Thanks For Purchasing.</p>
          </div>
          <div className="modal-action">
            <button
              onClick={handleCloseModal}
              className="btn bg-blue-500 text-white rounded-full px-6 py-2"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DashBoard;
