import { Link, useLoaderData } from "react-router-dom";

const AllProduct = () => {
  const gadgetsData = useLoaderData();
  

  return (
    <div className=" grid grid-cols-3 gap-6 mb-10">
      {
        gadgetsData.map(product =>(<div key={product.product_id} className="card card-compact bg-base-100  shadow-md">
            <figure>
              <img className="h-[200px] w-full object-cover"
                src={product.product_image}
                alt=  {product.product_title}        />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.product_title}</h2>
              <p>Price: {product.price}$ </p>
              <div className="card-actions w-full">
                <Link >
                <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>) )
      }
    </div>
  );
};

export default AllProduct;
