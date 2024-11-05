/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const GadgetCard = ({ product }) => {
  

  return (
    <div className="card card-compact bg-base-100  shadow-md">
      <figure>
        <img
          className="h-[200px] w-full object-cover"
          src={product.product_image}
          alt={product.product_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.product_title}</h2>
        <p>Price: {product.price}$ </p>
        <div className="card-actions w-full">
          
          <Link to={`/productDetails/${product.product_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GadgetCard;
