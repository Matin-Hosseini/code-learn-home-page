import "./Best-sellings.css";
import Product from "../Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//swiper mousewheel
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
SwiperCore.use([Keyboard, Mousewheel]);

const BestSellings = () => {
  const bestSellingsProducts = [
    {
      id: 1,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-7.png",
      hasDetails: false,
      rounded: false,
    },
    {
      id: 2,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-8.png",
      hasDetails: false,
      rounded: false,
    },
    {
      id: 3,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-9.png",
      hasDetails: false,
      rounded: false,
    },
    {
      id: 4,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-10.png",
      hasDetails: false,
      rounded: false,
    },
  ];
  return (
    <section className="section-container best-sellings-container">
      <div className="text-center mb-3">
        <div className="best-sellings-image">
          <img src="assets/images/fire-ball-pana-1.png" alt="" />
        </div>
        <h2 className="section-title section-title--border">پرفروش ترین ها</h2>
      </div>

      <Swiper spaceBetween={20} slidesPerView={3.5} mousewheel={true}>
        <SwiperSlide>
          <Product {...bestSellingsProducts[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <Product {...bestSellingsProducts[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <Product {...bestSellingsProducts[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <Product {...bestSellingsProducts[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <Product {...bestSellingsProducts[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <Product {...bestSellingsProducts[0]} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BestSellings;
