import { Link, NavLink, useLocation  } from "react-router-dom";
import { useContext } from "react";
import { CartProduct } from "./Root";


const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const { cartLength } = useContext(CartProduct);


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
          <li>
            <NavLink to='/aboutus'>About Us</NavLink>
          </li>        
        </>
    );

  return (
    <div className={`max-w-screen-2xl w-[90%] rounded-lg rounded-b-none mt-4 mx-auto ${isHomePage ? 'bg-[#9538E2] text-white ' : ''}`}>
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
          <Link to='/'><a className="btn btn-ghost md:text-xl gap-2"> <img className="w-5 max-sm:hidden h-5" src="https://img.icons8.com/?size=100&id=54502&format=png&color=000000" alt="" /> GadgetHeaven Zone</a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
          {
                navLink
            }           
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <div className="relative">
            <NavLink to="/dashboard" className="btn rounded-full ">
              <img
                src="https://img.icons8.com/?size=100&id=85080&format=png&color=000000"
                alt="Cart"
                className="w-5 rounded-full  h-5"
              /> <div className="absolute left-8 bottom-0 -top-2  rounded-full text-xl btn btn-sm bg-cyan-100 font-bold">{cartLength.length} </div>            
            </NavLink>       
          </div>
          <Link className="rounded-full btn " to='/dashboard'><img className="w-5  h-5 rounded-full" src="https://img.icons8.com/?size=100&id=85038&format=png&color=000000" alt="" /></Link>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
