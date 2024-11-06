import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title> About Us</title>
      </Helmet>
      <div className=" bg-[#9538E2]">
        <div className="pt-6 max-w-screen-2xl w-[90%] mx-auto ">
          <div>
            <div className=" text-center text-white w-[90%] mx-auto min-h-screen">
                <h1 className="text-3xl font-bold">
                  Hello Dear Customer, Welcome!
                </h1>
                <p className="py-6 font-thin w-[60%] mx-auto ">
                  Our mission is to simplify the complex world of technology. We
                  strive to make informed decisions about your next tech
                  purchase by providing you with clear, unbiased information.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="border-[1px] rounded-lg p-2 border-gray-100">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <hr />
                <p className="py-2 ">
                  Our mission is to simplify the complex world of technology. We
                  strive to make informed decisions about your next tech
                  purchase by providing you with clear, unbiased information.
                </p>
                </div>
                <div className="border-[1px] rounded-lg p-2 border-gray-100">
                <h3 className="text-3xl font-bold">What We Offer</h3>
                <hr />
                <ul className="py-2 space-y-1 grid grid-cols-2">
                  <li className="btn btn-ghost">In-Depth Reviews</li>
                  <li className="btn btn-ghost">Buying Guides</li>
                  <li className="btn btn-ghost">How-To Guides</li>
                  <li className="btn btn-ghost">Community Forums</li>
                </ul>
                </div>
                </div>
                <div className=" my-20 w-[80%] mx-auto bg-gradient-to-r from-blue-100 to-orange-100 py-16 rounded-lg text-center text-black outline  outline-offset-8 outline-white">
                  <h2 className="text-3xl font-bold my-4">
                    Subscribe to our Newsletter
                  </h2>
                  <p className="mb-6 text-lg">
                    Get the latest updates and news right in your inbox!
                  </p>
                  <div className="flex justify-center">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered input-lg rounded-l-lg w-[40%]"
                    />
                    <button className="btn btn-lg bg-gradient-to-r from-pink-400 to-yellow-400  font-semibold rounded-lg">
                      Subscribe
                    </button>
                  </div>
                </div>
                <Link to="/">
                  <button className="btn mb-10 bg-gradient-to-r from-pink-400 to-yellow-400 ">
                    Go To Home Page
                  </button>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
