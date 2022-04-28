import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css"
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">DÜĞÜN SEPETİN</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Ürünler</Link>
          </li>
        </ul>
      </div>
      <div className="right">right</div>
    </nav>
  );
};

export default Navbar;
