import "./Product.css";
const Product = ({
  newPrice,
  oldPrice,
  discount,
  img,
  hasDetails,
  rounded,
}) => {
  return (
    <div className="product">
      <div
        className={
          rounded ? "product__image product__image-radius" : "product__image"
        }>
        <div className="product-image">
          <a href="#">
            <img src={img} alt="" />
          </a>
        </div>
      </div>
      {hasDetails && (
        <div className="product__details">
          <div className="d-flex">
            <span className="discount">{discount}%</span>
            <span className="product__discount-price py-1">
              {newPrice}تومان
            </span>
          </div>
          <span className="product__old-price">{oldPrice} تومان</span>
        </div>
      )}
    </div>
  );
};

export default Product;
