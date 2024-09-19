import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GrocerryBG from "./Components/Banners/GrocerryBG";
import ProductDetails from "./Components/ProductDetails";
import GrocerrySection from "./Components/GrocerrySection";
import ElectronicSection from "./Components/ElectronicSection";
import Fashion from "./Components/Fashion";
import Cart from "./Components/Cart";
const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Hero />
          <Products />
        </>
      ),
    },
    {
      path: "/groceries",
      element: (
        <>
          <Navbar />
          <GrocerryBG/>
          <GrocerrySection/>
        </>
      ),
    },
    {
      path: "/groceries/:id",
      element: (
        <>
          <Navbar />
          <ProductDetails cat = "groceries"/>
        </>
      ),
    },
    {
      path : "/electronics",
      element: (
        <><Navbar/><ElectronicSection/></>
      )
    },
    {
      path : "/electronics/:id",
      element: (
        <><Navbar/><ProductDetails cat="Electronics" /></>
      )
    },
    {
      path : "/fashion",
      element: (
        <><Navbar/><Fashion/></>
      )
    },
    {
      path : "/fashion/:id",
      element: (
        <><Navbar/><ProductDetails cat="Fashion"/></>
      )
    },
    {
      path : '/cart',
      element:(
        <><Navbar/><Cart/></>
      )
    }
  ]);

  return (
    <div>
      <RouterProvider router={myRouter} />
    </div>
  );
};

export default App;
