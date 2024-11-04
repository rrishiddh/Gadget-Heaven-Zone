import bannerImg from "./../assets/banner.jpg";

const Banner = () => {
  return (
    <div className=" relative">
      <div className=" lg:w-[94%] w-[85%] mx-auto text-center space-y-6 bg-[#9538E2] rounded-xl pt-6 text-white pb-44 lg:pb-60 mb-48 md:mb-64 lg:mb-96 ">
        <h1 className="text-3xl md:text-5xl font-bold lg:w-[80%] mx-auto">
          Upgrade Your Tech Accessorize with Gadget Heaven Zone
        </h1>
        <p className="lg:w-[50%] w-[80%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart device to the coolest accessories, we have it all!
        </p>
        <button className="btn rounded-full text-[#9538E2] font-bold px-8">
          Shop Now
        </button>
      </div>
      <div className="absolute bottom-0 translate-y-32 md:translate-y-56 lg:translate-y-80  left-1/4 ">
        <div className=" mx-auto rounded-2xl outline-white outline outline-offset-8 outline-2">
          <img
            className="rounded-2xl h-[220px] md:h-[350px]  lg:h-[500px] object-cover mx-auto "
            src={bannerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
