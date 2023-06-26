import "./Main-header.css";

const MainHeader = () => {
  return (
    <div className="d-flex justify-content-between align-items-center py-3">
      <h1 className="logo">
        <a href="#">arvin</a>
      </h1>
      <div className="search">
        <span>جستجو</span>
        <input type="text" />
      </div>

      <div className="header-btns d-flex gap-4">
        <a href="" className="custom-btn">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              width="24"
              height="24"
              transform="translate(0 0.5)"
              fill="#1DC9A0"
            />
            <path
              d="M2 2.5H3.74001C4.82001 2.5 5.67 3.43 5.58 4.5L4.75 14.46C4.61 16.09 5.89999 17.49 7.53999 17.49H18.19C19.63 17.49 20.89 16.31 21 14.88L21.54 7.38C21.66 5.72 20.4 4.37 18.73 4.37H5.82001"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.25 22.5C16.9404 22.5 17.5 21.9404 17.5 21.25C17.5 20.5596 16.9404 20 16.25 20C15.5596 20 15 20.5596 15 21.25C15 21.9404 15.5596 22.5 16.25 22.5Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.25 22.5C8.94036 22.5 9.5 21.9404 9.5 21.25C9.5 20.5596 8.94036 20 8.25 20C7.55964 20 7 20.5596 7 21.25C7 21.9404 7.55964 22.5 8.25 22.5Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 8.5H21"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>سبد خرید</span>
        </a>
        <a href="" className="custom-btn login-btn">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.9925 19.9933C16.264 19.9933 19.7897 16.4676 19.7897 12.2037C19.7897 7.93973 16.2565 4.41406 11.985 4.41406C7.72102 4.41406 4.20288 7.93973 4.20288 12.2037C4.20288 16.4676 7.72855 19.9933 11.9925 19.9933ZM11.9925 18.4414C8.53463 18.4414 5.76985 15.6616 5.76985 12.2037C5.76985 8.74581 8.53463 5.97349 11.985 5.97349C15.4428 5.97349 18.2227 8.74581 18.2302 12.2037C18.2378 15.6616 15.4504 18.4414 11.9925 18.4414ZM8.10522 12.2037C8.10522 12.4146 8.18809 12.5804 8.35383 12.7461L10.9077 15.2623C11.0357 15.3828 11.1864 15.4506 11.3672 15.4506C11.7213 15.4506 11.9774 15.1794 11.9774 14.8253C11.9774 14.637 11.9021 14.4788 11.7816 14.3658L10.8625 13.4919L10.0187 12.8139L11.5631 12.8817H15.2394C15.6236 12.8817 15.8948 12.5879 15.8948 12.2037C15.8948 11.8119 15.6236 11.5257 15.2394 11.5257H11.5631L10.0263 11.601L10.87 10.9155L11.7816 10.0416C11.8946 9.92857 11.9774 9.77037 11.9774 9.58203C11.9774 9.22796 11.7213 8.96429 11.3672 8.96429C11.1864 8.96429 11.0357 9.02455 10.9077 9.14509L8.35383 11.6688C8.18056 11.8345 8.10522 12.0003 8.10522 12.2037Z"
              fill="white"
            />
          </svg>
          <span>ورود/ثبت نام</span>
        </a>
      </div>
    </div>
  );
};

export default MainHeader;
