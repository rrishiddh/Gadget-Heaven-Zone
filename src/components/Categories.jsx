import { Link, NavLink } from "react-router-dom";

const Categories = ({ phnCategory }) => {
  return (
    <div className="grid lg:col-span-1 gap-4 bg-white p-5 rounded-lg border-2 lg:mb-10">
      <NavLink
        className="bg-gray-100 btn btn-outline btn-primary rounded-full btn-md"
        to={`/`}
      >
        <button className="uppercase">All Products</button>
      </NavLink>

      {phnCategory.map((category) => (
        <NavLink
          to={`/category/${category.category}`}
          className="btn btn-outline btn-primary rounded-full btn-md bg-gray-100"
          key={category.id}
        >
          <button className="uppercase "> {category.category}</button>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
