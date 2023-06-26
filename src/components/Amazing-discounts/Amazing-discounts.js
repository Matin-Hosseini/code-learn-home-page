import Product from "../Product/Product";
import "./amazing-discounts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//swiper mousewheel
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
SwiperCore.use([Keyboard, Mousewheel]);

const AmazingDiscounts = () => {
  const amazingDiscoutsProducts = [
    {
      id: 1,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-1.png",
      hasDetails: true,
      rounded: true,
    },
    {
      id: 2,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-2.png",
      hasDetails: true,
      rounded: true,
    },
    {
      id: 3,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-3.png",
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
    {
      id: 5,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-2.png",
      hasDetails: true,
      rounded: true,
    },
    {
      id: 6,
      newPrice: 100000,
      oldPrice: 120000,
      discount: 20,
      img: "assets/images/product-demo-3.png",
      hasDetails: true,
      rounded: true,
    },
  ];
  return (
    <section className="section-container amazing-discounts">
      <div className="row">
        <div className="col-3 p-0 text-center">
          <h2 className="section-title">تخفیف شگفت انگیز</h2>
          <div className="amazings-discounts__image">
            <img src="assets/images/box-1.png" alt="" />
          </div>
        </div>

        <div className="col-8 p-0">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            mousewheel={true}>
            <SwiperSlide>
              <Product {...amazingDiscoutsProducts[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <Product {...amazingDiscoutsProducts[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <Product {...amazingDiscoutsProducts[2]} />
            </SwiperSlide>
            <SwiperSlide>
              <Product {...amazingDiscoutsProducts[3]} />
            </SwiperSlide>
            <SwiperSlide>
              <Product {...amazingDiscoutsProducts[4]} />
            </SwiperSlide>
            <SwiperSlide>
              <Product {...amazingDiscoutsProducts[5]} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AmazingDiscounts;
