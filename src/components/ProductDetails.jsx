import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, addToWishlist } from ".";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const data = useLoaderData();

  const { productDetails } = useParams();
  const productId = parseInt(productDetails);

  const [gadget, setGadget] = useState([]);

  const [wishlist, setWishlist] = useState(false);

 

  const product = data.find((product) => product.product_id === productId);

  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product || {};

  

   useEffect(() => {
  
    const singleGadget = data.find((gadget) => gadget.product_id == productId);
    setGadget(singleGadget || {});

    const getWishlist = JSON.parse(localStorage.getItem("wishlistAdded")) || [];
    const isExist = getWishlist.find(
      (item) => item.product_id == singleGadget.product_id
    );
    if (isExist) {
      setWishlist(true);
    }
  }, [data, productId, product_id]);

  const handelCart = (product) => {
    addToCart(product);
  };

  const handelWishlist = (product) => {
    addToWishlist(product);
    setWishlist(true);
  };

  return (
    <div className="relative max-w-screen-2xl w-[90%] mx-auto ">
      <div className=" mx-auto text-center space-y-6 bg-[#9538E2] rounded-xl pt-6 text-white pb-32 lg:pb-60 mb-96 max-sm:h-screen">
        <h1 className="text-3xl  font-bold lg:w-[80%] mx-auto">
          Product Details
        </h1>
        <p className="lg:w-[50%] w-[80%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart device to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="absolute top-48 left-[5%]  w-[80%] ">
        <div className="bg-white rounded-xl py-10">
          <div className="flex flex-col lg:grid  lg:grid-cols-4 max-sm:text-center ">
            <div className="p-4 lg:col-span-2">
              <img
                src={product_image}
                className="max-w-sm rounded-lg shadow-2xl mx-auto w-[100%] h-[50%] lg:h-[100%] object-fit"
              />
            </div>
            <div className="lg:col-span-2 space-y-2">
              <h1 className="text-2xl lg:text-3xl font-bold">
                {product_title}
              </h1>
              <p className="font-bold"> Price: $ {price}</p>

              <button className="btn btn-xs bg-green-200 text-green-500">
                {availability ? "In Stock" : "Not In Stock"}
              </button>

              <p className="py-2 font-thin">{description}</p>
              <p className="font-bold">
                Specification: <br />
              </p>
              <ol className="list-decimal list-inside space-y-1">
                {specification.map((spec, id) => (
                  <li key={id}>{spec}</li>
                ))}
              </ol>

              <p className="flex gap-1 font-bold justify-center pt-2">
                Rating{" "}
                <img
                  className="w-6 h-6 "
                  src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                  alt=""
                />
              </p>
              <div className="flex  gap-3 justify-center pb-2">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />

                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2"
                  />
                </div>
                <button className="btn btn-xs bg-gray-200">{rating}</button>
              </div>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => handelCart(product)}
                  className="btn  text-white btn-primary"
                >
                  Add To Cart{" "}
                  <img
                    className="w-6 h-6 text-white"
                    src="https://img.icons8.com/?size=100&id=85080&format=png&color=000000"
                  />
                </button>
                <button
                  disabled={wishlist}
                  onClick={() => handelWishlist(product)}
                  className="btn rounded-full p-0 "
                >
                  <img
                    className="w-6 h-6 m-3"
                    src="https://img.icons8.com/?size=100&id=85038&format=png&color=000000"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
