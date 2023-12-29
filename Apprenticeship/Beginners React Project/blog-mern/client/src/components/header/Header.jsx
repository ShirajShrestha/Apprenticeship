import { Link } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h2>Blog App</h2>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"add-blog"}>
          <li>Add Blog</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
