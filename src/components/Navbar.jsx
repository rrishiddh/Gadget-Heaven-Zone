import { Link, NavLink } from "react-router-dom";
import { previousCartData } from ".";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  
  useEffect(() => {
    const cartData = previousCartData();
    setCartCount(cartData.length);
  }, []);

    const navLink = (
        < >
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/statistics'>Statistics</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>        
        </>
    );

  return (
    <div className="max-w-screen-2xl bg-base-100 mx-auto">
      <div className="navbar w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-300 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-4 "
            >
            {
                navLink
            }        
            </ul>
          </div>
          <a className="btn btn-ghost text-xl gap-2"> <img className="w-5 h-5" src="https://img.icons8.com/?size=100&id=54502&format=png&color=000000" alt="" /> Gadget Heaven Zone</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
          {
                navLink
            }           
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <div className="relative">
            <NavLink to="/dashboard" className="btn rounded-full ">
              <img
                src="https://img.icons8.com/?size=100&id=85080&format=png&color=000000"
                alt="Cart"
                className="w-5 rounded-full  h-5"
              /> <span className="absolute  left-10 bottom-0 -top-1 rounded-full text-xl   font-bold">{cartCount} </span>            
            </NavLink>       
          </div>
          <Link className="rounded-full btn " to='/dashboard'><img className="w-5  h-5 rounded-full" src="https://img.icons8.com/?size=100&id=85038&format=png&color=000000" alt="" /></Link>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
