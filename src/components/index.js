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
  const allData = localStorage.getItem("wishlistAdded");

  if (allData) {
    const cartAdded = JSON.parse(allData);
    return cartAdded;
  } else {
    return [];
  }
};

const addToWishlist = (gadget) => {
  const cartAdded = previousCartData();
  const alreadyAdded = cartAdded.find(
    (item) => item.product_id == gadget.product_id
  );

  if (alreadyAdded) {
    return toast.error("Already Added To Wishlist!");
  }

  cartAdded.push(gadget);
  localStorage.setItem("wishlistAdded", JSON.stringify(cartAdded));
  toast.success("Successfully Added To Wishlist!");
};


const removeFromCart = (id)=>{
  const cartAdded = previousCartData();
  const remaining = cartAdded.filter(gadget => gadget.product_id != id)
  localStorage.setItem("cartAdded", JSON.stringify(remaining));
  toast.success("Successfully Removed From Cart!");

}

export { addToCart, previousCartData, previousWishlistData, addToWishlist , removeFromCart };
