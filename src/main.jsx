import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import Root from "./components/Root";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import DashBoard from "./components/DashBoard";
import AllProduct from "./components/AllProduct";
import ProductDetails from "./components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('../category.json'),
        children: [
          {
            path: "/",
            element: <AllProduct></AllProduct>,
            loader: ()=> fetch('../gadgets.json'),       
          },
          {
            path: "/category/:category",
            element: <AllProduct></AllProduct>,
            loader: ()=> fetch('../gadgets.json'),       
          }          
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: ()=> fetch('./gadgets.json'),       

      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/productDetails/:productDetails",
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch('./gadgets.json'),       
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
