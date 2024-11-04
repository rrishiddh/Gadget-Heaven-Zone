import { Link } from "react-router-dom";

const ProductCategoryName = ({phnCategory}) => {
    return (
        <div className="grid col-span-1 gap-4 bg-slate-100 p-5 rounded-lg border-2">
            <button className=" uppercase btn btn-outline btn-primary rounded-full btn-md">All Products</button>
            {
                phnCategory.map(category => (<Link className="btn btn-outline btn-primary rounded-full btn-md " key={category.id} to={'/'}><button className="uppercase "> {category.category}</button></Link>)
            )}           
            
        </div>
    );
};

export default ProductCategoryName;