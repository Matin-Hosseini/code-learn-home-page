import * as React from "react";
import "./Suggestions-section.css";
import Product from "../Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//swiper mousewheel
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
SwiperCore.use([Keyboard, Mousewheel]);

const SuggestionsSection = () => {
  const suggestionsProducts = [
    {
      id: 1,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-4.png",
      hasDetails: true,
      rounded: true,
    },
    {
      id: 2,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-5.png",
      hasDetails: true,
      rounded: true,
    },
    {
      id: 3,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-6.png",
      hasDetails: true,
      rounded: true,
    },
    {
      id: 4,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-1.png",
      hasDetails: true,
      rounded: true,
    },
  ];

  return (
    <section className="section-container suggestions-container">
      <div className="text-center">
        <h2 className="section-title section-title--border">
          پیشنهادهای آروین
        </h2>
      </div>
      <div className="row suggestion-products-container">
        <div className="col-3">
          <Product {...suggestionsProducts[0]} />
        </div>
        <div className="col-3">
          <Product {...suggestionsProducts[1]} />
        </div>
        <div className="col-3">
          <Product {...suggestionsProducts[2]} />
        </div>
        <div className="col-3">
          <Product {...suggestionsProducts[3]} />
        </div>
      </div>
    </section>
  );
};

export default SuggestionsSection;
