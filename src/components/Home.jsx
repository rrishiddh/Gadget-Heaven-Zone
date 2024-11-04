import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ExploreGadgets from "./ExploreGadgets";
import ProductCategoryName from "./ProductCategoryName";

const Home = () => {
    const phnCategory = useLoaderData();
    // console.log(phnCategory)
  return (
    <div className="max-w-screen-2xl w-[90%] mx-auto ">
      <Banner></Banner>
      <div className="min-h-screen">
        <ExploreGadgets></ExploreGadgets>
        <div className="grid grid-cols-6 gap-6">
          <div >
            <ProductCategoryName phnCategory={phnCategory}></ProductCategoryName>
          </div>
          <div className="grid col-span-5">            
          <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
