import React, { useEffect, useState } from "react";
import { previousCartData } from ".";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    const addedToCart = previousCartData();
    setCartProduct(addedToCart);
  }, []);

  return (
    <div className="max-w-screen-2xl w-[90%] mx-auto ">
      {cartProduct.map((singleGadget) => {
        <div className="flex justify-between card bg-base-100 w-[80%] mx-auto shadow-xl">
          <div className="flex gap-4">
            <div>
              <img src={singleGadget.product_image} alt="" />
            </div>
            <div>
              <h2>{singleGadget.product_title}</h2>
              <p>{singleGadget.description}</p>
              <p>Price: $ {singleGadget.price}</p>
            </div>
          </div>
          <div>
            <img
              className="w-6 h-6"
              src="https://img.icons8.com/?size=100&id=114052&format=png&color=000000"
              alt=""
            />
          </div>
        </div>;
      })}
    </div>
  );
};

export default Cart;
