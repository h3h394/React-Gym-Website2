import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import JoinUs from "./components/JoinUs/JoinUs";
import Features from "./components/Features/Features";
import BigOffer from "./components/BigOffer/BigOffer";
import Pricing from "./components/Pricing/Pricing";
import Gallery from "./components/Gallery/Gallery";
import Trainers from "./components/Trainers/Trainers";
import BannerOffer from "./components/BannerOffer/BannerOffer";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Main />
      <JoinUs />
      <Features />
      <BigOffer />
      <Pricing />
      <Gallery />
      <Trainers />
      <BannerOffer />
      <Footer />
    </div>
  );
};

export default App;
