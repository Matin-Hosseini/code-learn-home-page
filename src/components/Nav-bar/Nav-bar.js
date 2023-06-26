import "./Nav-bar.css";
const NavBar = () => {
  return (
    <nav className="d-flex justify-content-between algin-items-center py-4">
      <ul className="nav-menu">
        <li className="nav-menu__item bar">
          <a href="#" className="nav-menu__link pe-0">
            محصولات
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            پرفروش ترین ها
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            پیشنهادها
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            تخفیف ها
          </a>
        </li>
        <li className="nav-menu__item bar">
          <a href="#" className="nav-menu__link">
            جشنواره
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link ps-0">
            از من بپرسید
          </a>
        </li>
      </ul>

      <a href="#" className="location d-flex algin-items-center gap-1">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.9999 13.93C13.723 13.93 15.1199 12.5331 15.1199 10.81C15.1199 9.08687 13.723 7.69 11.9999 7.69C10.2768 7.69 8.87988 9.08687 8.87988 10.81C8.87988 12.5331 10.2768 13.93 11.9999 13.93Z"
            stroke="#26C6D0"
            stroke-width="1.5"
          />
          <path
            d="M3.61995 8.99C5.58995 0.330002 18.42 0.340003 20.38 9C21.53 14.08 18.37 18.38 15.6 21.04C13.59 22.98 10.41 22.98 8.38995 21.04C5.62995 18.38 2.46995 14.07 3.61995 8.99Z"
            stroke="#26C6D0"
            stroke-width="1.5"
          />
        </svg>
        <span>لطفا شهر خود را انتخاب کنید</span>
      </a>
    </nav>
  );
};

export default NavBar;
