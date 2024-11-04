
const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-16 bg-slate-200">
      <div className="w-[60%] mx-auto  text-center">
        <footer className=" space-y-4   mx-auto">
          <h1 className="text-2xl lg:text-4xl font-bold">Gadget Heaven Zone</h1>
          <p className="font-thin">
            Leading the way in cutting edge technology and innovation
          </p>
        </footer>
        <div className="divider "></div>

        <footer className=" footer text-base-content lg:ml-20 py-4  mx-auto">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping and Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Career</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
