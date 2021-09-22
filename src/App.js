import { useEffect, useState } from "react";

import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Perfumes from "./components/Products/Perfumes";
import Quote from "./components/Layout/Quote";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import ContextProvider from "./store/ContextProvider";

import "./App.css";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [checkout, setCheckOut] = useState(false);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };
  const checkOutHandler = () => {
    setCheckOut(!checkout);
  };
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/5f7d2d824704467e89f54659/1et5mmdij";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
    Tawk_API.onLoad = function () {
      console.log("chat loaded");
      Tawk_API.setAttributes(
        {
          name: "Test Name",
          email: "email@email.com",
          hash: "hash value",
        },
        function (error) {}
      );
    };
  }, []);

  return (
    <ContextProvider>
      <Header onClick={showCartHandler} />
      <Hero />
      <Perfumes />
      <Quote />
      <Footer />
      <Cart
        show={showCart}
        notShowHandler={showCartHandler}
        checkOutHandler={checkOutHandler}
      />
      <CheckOut
        show={checkout}
        checkOutHandler={checkOutHandler}
        showCartHandler={showCartHandler}
      />
    </ContextProvider>
  );
}

export default App;
