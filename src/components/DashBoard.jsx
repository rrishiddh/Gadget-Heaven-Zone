import React, { useEffect, useState } from "react";
import { previousCartData, removeFromCart } from ".";

const DashBoard = () => {

  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    const addedToCart = previousCartData();
    setCartProduct(addedToCart);
  }, []);


  const handelRemove = id =>{
    removeFromCart(id);
    const addedToCart = previousCartData();
    setCartProduct(addedToCart);
  }

  return (
    <div>
      <div className="bg-[#9538E2] ">
        <div className="max-w-screen-2xl w-[90%] mx-auto ">
          <div className=" lg:w-[94%]  mx-auto text-center space-y-6  rounded-xl pt-6 text-white pb-20">
            <h1 className="text-3xl md:text-5xl font-bold lg:w-[80%] mx-auto">
              Dashboard
            </h1>
            <p className="lg:w-[50%] w-[80%] mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart device to the coolest accessories, we have
              it all!
            </p>
            <div className=" space-x-2">
              <button className="btn rounded-full text-[#9538E2] font-bold px-8">
                Cart
              </button>
              <button className="btn rounded-full text-[#9538E2] font-bold px-8">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen max-w-screen-2xl w-[90%] mx-auto">
        {/* cart  */}
        <div className="max-w-screen-2xl w-[90%] mx-auto space-y-6 ">
          <div className="space-y-6 ">
            <div>
              <h1>Cart</h1>
              <div>
                <h1>Total Price: </h1>
                <button>Sort By Price</button>
                <button>Purchase</button>
              </div>
            </div>


          {cartProduct.map((singleGadget , idx) =>( 
        <div key={idx} className="grid gap-10 space-y-6 grid-cols-12 justify-between card bg-base-100 w-[80%] mx-auto shadow-xl">
          <div className="flex space-y-6 col-span-11 gap-4">

            <div className="p-4 h">
              <img className="h-[100%] w-[100%] object-cover justify-center" src={singleGadget.product_image} alt="" />
            </div>
            <div className="space-y-3">
              <h2>{singleGadget.product_title}</h2>
              <p>{singleGadget.description}</p>
              <p>Price: $ {singleGadget.price}</p>
            </div>
          </div>
          <div className="col-span-1">
           <div onClick={()=> handelRemove(singleGadget.product_id
)}> <img
              className="w-6 h-6"
              src="https://img.icons8.com/?size=100&id=114052&format=png&color=000000"
              alt=""
            /></div>
          </div>
        </div>
      ))}
          </div>
     
    </div>
        {/* wishlist  */}
      </div>
    </div>
  );
};

export default DashBoard;
