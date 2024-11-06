import toast from "react-hot-toast";


const previousCartData = () => {
  const allData = localStorage.getItem("cartAdded");

  if (allData) {
    const cartAdded = JSON.parse(allData);
    return cartAdded;
  } else {
    return [];
  }
};

const addToCart = (gadget) => {
  const cartAdded = previousCartData();
  const alreadyAdded = cartAdded.find(
    (item) => item.product_id == gadget.product_id
  );

  if (alreadyAdded) {
    return toast.error("Already Added To Cart!");
  }

  cartAdded.push(gadget);
  localStorage.setItem("cartAdded", JSON.stringify(cartAdded));
  toast.success("Successfully Added To Cart!");
};

const previousWishlistData = () => {
  const allData2 = localStorage.getItem("wishlistAdded");

  if (allData2) {
    const cartAdded2 = JSON.parse(allData2);
    return cartAdded2;
  } else {
    return [];
  }
};

const addToWishlist = (gadget) => {
  const cartAdded2 = previousWishlistData();
  const alreadyAdded2 = cartAdded2.find(
    (item) => item.product_id == gadget.product_id
  );

  if (alreadyAdded2) {
    return toast.error("Already Added To Wishlist!");
  }

  cartAdded2.push(gadget);
  localStorage.setItem("wishlistAdded", JSON.stringify(cartAdded2));
  toast.success("Successfully Added To Wishlist!");
};


const removeFromCart = (id)=>{
  const cartAdded3 = previousCartData();
  const remaining = cartAdded3.filter(gadget => gadget.product_id != id)
  localStorage.setItem("cartAdded", JSON.stringify(remaining));
  toast.success("Successfully Removed From Cart!");

}

const removeFromWishlist = (id)=>{
  const cartAdded4 = previousWishlistData();
  const remaining2 = cartAdded4.filter(gadget => gadget.product_id != id)
  localStorage.setItem("wishlistAdded", JSON.stringify(remaining2));
  toast.success("Successfully Removed From Wishlist!");

}

export { addToCart, previousCartData, previousWishlistData, addToWishlist , removeFromCart, removeFromWishlist };
