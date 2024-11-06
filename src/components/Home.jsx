import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ExploreGadgets from "./ExploreGadgets";
import Categories from "./Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const phnCategory = useLoaderData();

  return (
    <div className="max-w-screen-2xl  mx-auto bg-[#F7F7F7] ">
      <Helmet>
        <title> Gadget Heaven Zone - Home Page</title>
      </Helmet>
      <Banner></Banner>

      <div className="min-h-screen">
        <ExploreGadgets></ExploreGadgets>
        
        <div className="w-[90%] mx-auto grid lg:grid-cols-6 gap-6">
          <div>
            <Categories phnCategory={phnCategory}></Categories>
          </div>
          <div className="grid lg:col-span-5">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
