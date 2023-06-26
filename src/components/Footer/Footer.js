import "./Footer.css";
const Footer = () => {
  return (
    <footer className="text-center">
      <div className="footer__logo-image">
        <img src="assets/images/footer-logo.png" alt="" />
      </div>
      <p className="footer__caption mt-3">
        آن جیزی که می خواند در خصوص متن ها نوشته شود می تواند در این قسمت درج
        شود . این یک متن آزمایشی میباشد که استفاده شده است.
      </p>
      <div className="footer__socials my-3">
        <a href="#">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="#">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="#">
          <i class="bi bi-twitter"></i>
        </a>
      </div>

      <ul className="footer__menu d-flex justify-content-center">
        <li>
          <a href="#" className="footer__links">
            صفحه اصلی
          </a>
        </li>
        <li>
          <a href="#" className="footer__links">
            درباره ما
          </a>
        </li>
        <li>
          <a href="#" className="footer__links">
            تماس
          </a>
        </li>
        <li>
          <a href="#" className="footer__links">
            حمایت مالی
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
