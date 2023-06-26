import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import AmazingDiscounts from "./components/Amazing-discounts/Amazing-discounts";
import SuggestionsSection from "./components/Suggestions-section/Suggestions-section";
import BestSellings from "./components/Best-sellings/Best-sellings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container-fluid">
      <App />
      <Banner />
      <Header />
    </div>
    <AmazingDiscounts />
    <div className="container-fluid">
      <SuggestionsSection/>
      <BestSellings/>
      <Footer />
    </div>
  </React.StrictMode>
);
