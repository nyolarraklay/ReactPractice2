import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteNotFound from "./Components/ErrorComponent/index.jsx";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Products from "./Components/Home/index.jsx";
import ProductIndividual from "./Components/Product/index.jsx";
import CheckOut from "./Components/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteNotFound />,
    children: [
      { path: "/", element: <Products /> },
      { path: "/about", element: <About /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/product/:id", element: <ProductIndividual /> },
      { path: "/checkout", element: <CheckOut /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
