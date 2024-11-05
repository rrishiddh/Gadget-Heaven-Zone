import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./Navbar";
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className="bg-[#F7F7F7]">
            <Navbar></Navbar>
            <Outlet ></Outlet>
            <Toaster />
            <Footer></Footer>
        </div>
    );
};

export default Root;