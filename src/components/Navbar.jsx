import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <div className="max-w-screen-2xl mx-auto">
      <div className="navbar bg-base-100 w-[94%] mx-auto">
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
          <a className="btn btn-ghost text-xl">Gadget Heaven Zone</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
          {
                navLink
            }           
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className=" rounded-full bg-black/30 p-2"><img className="w-5 rounded-full h-5" src="https://img.icons8.com/?size=100&id=85080&format=png&color=000000" alt="" /></a>
          <a className="rounded-full bg-black/30 p-2"><img className="w-5 rounded-full h-5" src="https://img.icons8.com/?size=100&id=85038&format=png&color=000000" alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
