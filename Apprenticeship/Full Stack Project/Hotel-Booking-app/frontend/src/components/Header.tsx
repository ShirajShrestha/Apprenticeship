import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className=" header-container">
      <div className=" header-wrapper">
        <span className=" header-text-link">
          <Link to="/">MernHolidays.com</Link>
        </span>
        <span className=" header-signin">
          <Link to="/sign-in" className=" sign-in-btn">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
