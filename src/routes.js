import React from "react";

// Admin Imports
import Dashboard from "views/admin/default";


// Auth Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdAddShoppingCart,
  MdPerson,
  MdShoppingBasket,
} from "react-icons/md";
// import Orders from "views/admin/orders";
// import Users from "views/admin/users";
// import Products from "views/admin/products";
import AddProduct from "views/admin/products/AddProduct";
import MyOrders from "views/admin/orders";
import Myusers from "views/admin/users";
import Myproducts from "views/admin/products";
import Singleproduct from "views/admin/products/Singleproduct";
import SingleOrder from "views/admin/orders/SingleOrder";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Orders",
    layout: "/admin",
    path: "orders",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <MyOrders />,
    secondary: true,
  },
  {
    name: "Users",
    layout: "/admin",
    icon: <MdPerson className="h-6 w-6" />,
    path: "users",
    component: <Myusers />,
  },
  {
    name: "Products",
    layout: "/admin",
    path: "products",
    icon: <MdShoppingBasket className="h-6 w-6" />,
    component: <Myproducts />,
  },
  {
    name: "Add Product",
    layout: "/admin",
    path: "products/add",
    icon: <MdAddShoppingCart className="h-6 w-6" />,
    component: <AddProduct />,
  },
  {

    layout: "/admin",
    path: "products/:id",
    component: <Singleproduct />,
  },
  {
    layout: "/admin",
    path: "orders/:id",
    component: <SingleOrder />,

  }
];
export default routes;