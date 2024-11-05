const DashBoard = () => {
  return (
    <div className="bg-[#9538E2] ">
      <div className="max-w-screen-2xl w-[90%] mx-auto ">
        <div className=" lg:w-[94%]  mx-auto text-center space-y-6  rounded-xl pt-6 text-white pb-44 lg:pb-60 mb-48 md:mb-64 lg:mb-60 ">
          <h1 className="text-3xl md:text-5xl font-bold lg:w-[80%] mx-auto">
            Dashboard
          </h1>
          <p className="lg:w-[50%] w-[80%] mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart device to the coolest accessories, we have it
            all!
          </p>
          <div className=" space-x-2">
          <button className="btn rounded-full text-[#9538E2] font-bold px-8"> Cart</button>
          <button className="btn rounded-full text-[#9538E2] font-bold px-8"> Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
