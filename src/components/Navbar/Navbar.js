import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">WEDDING CART</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <Stack spacing={2} direction="row" >
          <Link to="/signin" >
          <Button size ="small" variant="contained" color="error" >SIGN IN </Button>
          </Link>
          <Link to="/signup" underline="none">
          <Button size ="small" variant="contained" color="success" >SIGN UP</Button>
          </Link>
          
        </Stack>
      </div>
    </nav>
  );
};

export default Navbar;
