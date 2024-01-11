import { Link } from "react-router-dom";
import "../styles/header.css";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className=" header-container">
      <div className=" header-wrapper container">
        <span className=" header-text-link">
          <Link to="/">MernHolidays.com</Link>
        </span>
        <span className=" header-signin">
          {isLoggedIn ? (
            <>
              <Link to="/my-bookings" className="header-link">
                My Bookings
              </Link>
              <Link to="/my-hotels" className="header-link">
                My Hotels
              </Link>
              <SignOutButton />
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
