import React from "react";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="max-w-[1440px]  ">
      <Cart />
    </div>
  );
}

export default App;
