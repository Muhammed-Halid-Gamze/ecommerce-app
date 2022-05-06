import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Avatar,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Paper,
  TextField,
  Link,
} from "@mui/material";
import styles from "../SıgnUp/styles.module.css";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { red } from "@mui/material/colors";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  password: "",
  remember: false,
};
const onSubmit = (values, props) => {
  console.log(values);
  setTimeout(() => {
    props.resetForm();
    props.setSubmitting(false);
  }, 2000);
  console.log(props);
};

const validationSchema = Yup.object().shape({
  username: Yup.string().email("Please enter valid email").required("Required"),
  password: Yup.string()
    .min(5, "Please enter at least 5 character")
    .required("Required"),
});

const SignIn = () => {
  return (
    <Grid>
      <Paper
        elevation={20}
        sx={{
          height: "70vh",
          width: 340,
          margin: "20px auto",
          padding: 5,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: red[700],
            height: 70,
            width: 70,
            marginBottom: 3,
          }}
        >
          <LockOpenIcon sx={{ fontSize: 40 }} />
        </Avatar>
        <Typography variant="h3">Sign In</Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Box>
                <Field
                  as={TextField}
                  sx={{ marginTop: 3 }}
                  label="Username"
                  name="username"
                  placeholder="Enter Username"
                  helperText={<ErrorMessage name="username" />}
                  color="error"
                  fullWidth
                  required
                />
                <Field
                  as={TextField}
                  sx={{ marginTop: 3 }}
                  label="Password"
                  name="password"
                  placeholder="Enter Password"
                  helperText={<ErrorMessage name="password" />}
                  type="password"
                  color="error"
                  fullWidth
                  required
                />

                <FormGroup>
                  <Field
                    as={FormControlLabel}
                    control={
                      <Checkbox
                        sx={{
                          color: red[700],
                          "&.Mui-checked": {
                            color: red[700],
                          },
                        }}
                      />
                    }
                    label="Remember Me"
                    name="remember"
                  />
                </FormGroup>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  sx={{
                    marginTop: 3,
                    bgcolor: red[700],
                    "&:hover": { bgcolor: red[700] },
                  }}
                  fullWidth
                >
                  SIGN IN
                </Button>
                <Typography sx={{ marginTop: 1 }}>
                  <Link href="#" underline="none">
                    Forgort Password ?
                  </Link>
                </Typography>
                <Typography sx={{ marginTop: 1 }}>
                  {" "}
                  Do you have account?
                  <Link href="#" underline="none">
                    Sign In
                  </Link>
                </Typography>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignIn;
