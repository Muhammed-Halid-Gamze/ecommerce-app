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
  Avatar,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Checkbox,
} from "@mui/material";
import styles from "../SıgnUp/styles.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deepPurple, purple } from "@mui/material/colors";

const SignUp = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={0} sm={3} md={4}>
          <Box></Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center  ">
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
              marginBottom: 5,
              padding: 5,
            }}
            className={styles.form}
          >
            <Typography
              variant="h3"
              sx={{
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar 
                sx={{
                  backgroundColor: purple[500],
                  height: 70,
                  width: 70,
                  marginBottom: 3,
                }}
              >
                <AccountCircleIcon sx={{ fontSize: 50 }} />
              </Avatar>
              Sign Up
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormControl sx={{ marginTop: 1 }}>
                <InputLabel htmlFor="my-name">Name</InputLabel>
                <Input
                  id="my-name"
                  aria-describedby="my-helper-text"
                  placeholder="Please enter your name..."
                />
                <FormHelperText id="my-helper-text">
                  We'll never share your name.
                </FormHelperText>
              </FormControl>
              <FormControl sx={{ marginTop: 1 }}>
                <InputLabel htmlFor="my-email">Email address</InputLabel>
                <Input
                  id="my-email"
                  aria-describedby="my-helper-text"
                  type="email"
                  placeholder="Please enter your email..."
                />
                <FormHelperText id="my-helper-text">
                  We'll never share your email.
                </FormHelperText>
              </FormControl>
              <FormControl sx={{ marginTop: 1 }}>
                <InputLabel htmlFor="my-password">Password</InputLabel>
                <Input
                  id="my-password"
                  aria-describedby="my-helper-text"
                  type="password"
                  placeholder="Please enter your password..."
                />
                {/* <FormHelperText id="my-helper-text">
                  We'll never share your password.
                </FormHelperText> */}
              </FormControl>
              <FormControl sx={{ marginTop: 1 }}>
                <InputLabel htmlFor="my-pssword-confirm">
                  Password Confirm
                </InputLabel>
                <Input
                  id="my-password-confirm"
                  aria-describedby="my-helper-text"
                  type="password"
                  placeholder="Please confirm your password..."
                />
                {/* <FormHelperText id="my-helper-text">
                  We'll never share your email.
                </FormHelperText> */}
              </FormControl>
              <FormControl sx={{ marginTop: 1 }}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  sx={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I accept terms and conditions"
                />
              </FormGroup>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                justifyContent: "center",
                marginTop: 1
              }}
            >
              <Button type="submit" variant="contained" color="secondary" fullWidth>
                SIGN UP
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={0} sm={3} md={4}>
          <Box></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
