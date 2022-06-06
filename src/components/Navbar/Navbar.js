import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";

const Navbar = () => {
  const { loggedIn, logout } = useAuth();
  const { items } = useBasket();
  console.log(loggedIn);

  const handleLogout = async () => {
    logout();
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/" style={{ textDecoration: "none" }}>
            WEDDING CART
          </Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {!loggedIn && (
          <>
            <Stack spacing={2} direction="row">
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <Button size="small" variant="contained" color="error">
                  SIGN IN{" "}
                </Button>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button size="small" variant="contained" color="secondary">
                  SIGN UP
                </Button>
              </Link>
            </Stack>
          </>
        )}
        {loggedIn && (
          <>
            <>
              <Stack spacing={2} direction="row">
                  {items.length > 0 && (
                    <Link to="/basket" style={{ textDecoration: "none" }} >
                      <Button size="small" variant="contained" color="success">
                        BASKET ({items.length}) 
                      </Button>
                    </Link>
                  )}
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="error"
                    startIcon={<AccountCircleIcon />}
                  >
                    PROFILE{" "}
                  </Button>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </Button>
                </Link>
              </Stack>
            </>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
