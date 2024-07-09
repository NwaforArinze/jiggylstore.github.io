import React from "react";
import Navbar from "./Components/Navbar";
import NavbarTwo from "./Components/NavbarTwo";
import Holder from "./Components/Holder";
import Hot from "./Components/Hot";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <NavbarTwo />
      <Holder />
      <Hot />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
