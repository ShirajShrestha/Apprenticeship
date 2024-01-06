import { Link } from "react-router-dom";
import "../styles/header.css";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className=" header-container">
      <div className=" header-wrapper">
        <span className=" header-text-link">
          <Link to="/">MernHolidays.com</Link>
        </span>
        <span className=" header-signin">
          {isLoggedIn ? (
            <>
              <Link to="/my-bookings">My Bookings</Link>
              <Link to="/my-hotels">My Hotels</Link>
              <button>Sign out</button>
            </>
          ) : (
            <Link to="/sign-in" className=" sign-in-btn">
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
