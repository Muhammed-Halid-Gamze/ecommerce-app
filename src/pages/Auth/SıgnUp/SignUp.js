import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import styles from "../SıgnUp/styles.module.css"

const SignUp = () => {
  return (
    <Box sx={{ flexGrow: 1}} >
      <Grid container spacing={3}>
        <Grid item xs={4} md={3}>
          <Box></Box>
        </Grid>
        <Grid item xs={4} md={6}>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              border: "solid 1px",
              marginTop: 5,
              marginBottom: 5,
              padding: 5,
            }}
            className={styles.form}
          >
            <Typography
              variant="h3"
              sx={{ justifyContent: "center", textAlign: "center" }}
            >
              Sign Up
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormControl sx={{ marginTop: 3 }}>
                <InputLabel htmlFor="my-name">Name</InputLabel>
                <Input id="my-name" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">
                  We'll never share your name.
                </FormHelperText>
              </FormControl>
              <FormControl sx={{ marginTop: 3 }}>
                <InputLabel htmlFor="my-email">Email address</InputLabel>
                <Input
                  id="my-email"
                  aria-describedby="my-helper-text"
                  type="email"
                />
                <FormHelperText id="my-helper-text">
                  We'll never share your email.
                </FormHelperText>
              </FormControl>
              <FormControl sx={{ marginTop: 3 }}>
                <InputLabel htmlFor="my-password">Password</InputLabel>
                <Input
                  id="my-password"
                  aria-describedby="my-helper-text"
                  type="password"
                />
                {/* <FormHelperText id="my-helper-text">
                  We'll never share your password.
                </FormHelperText> */}
              </FormControl>
              <FormControl sx={{ marginTop: 3 }}>
                <InputLabel htmlFor="my-pssword-confirm">
                  Password Confirm
                </InputLabel>
                <Input
                  id="my-password-confirm"
                  aria-describedby="my-helper-text"
                  type="password"
                />
                {/* <FormHelperText id="my-helper-text">
                  We'll never share your email.
                </FormHelperText> */}
              </FormControl>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                justifyContent: "center",
                marginTop: 5,
              }}
            >
              <Button variant="contained" color="secondary">
                SIGN UP
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4} md={3}>
          <Box></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
