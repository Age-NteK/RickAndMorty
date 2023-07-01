import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav_div}>
      <nav className={styles.nav_nav}>
        <ul className={styles.nav_ul}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li className={styles.nav_li}>Home</li>
          </Link>
          <Link to="/favorites" style={{ textDecoration: "none" }}>
            <li className={styles.nav_li}>Favorites</li>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <li className={styles.nav_li}>About</li>
          </Link>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <li className={styles.nav_li}>Create</li>
          </Link>
          <Link to="/notfound" style={{ textDecoration: "none" }}>
            <li className={styles.nav_li}>NotFound</li>
          </Link>
          <li className={styles.nav_li_search}>
            <SearchBar />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
