import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "./GadgetCard";
import { useEffect, useState } from "react";

const AllProduct = () => {
  const gadgetsData = useLoaderData();
  const { category } = useParams();
  // console.log(category)

  const [gadgetCategory, setGadgetCategory] = useState([]);

  useEffect(() => {
    if (category) {
      const selectedCategory = [...gadgetsData].filter(
        (gadget) => gadget.category === category
      );
      setGadgetCategory(selectedCategory);
    } else {
      setGadgetCategory(gadgetsData);
    }
  }, [category, gadgetsData]);

  return (
    <div className="mb-10">
    {gadgetCategory.length > 0 ? (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {gadgetCategory.map((product) => (
          <GadgetCard product={product} key={product.product_id}></GadgetCard>
        ))}
      </div>
    ) : (
      <p className="text-center items-center align-middle justify-center font-thin">No products available for this category.</p>
    )}
  </div>
  );
};

export default AllProduct;
