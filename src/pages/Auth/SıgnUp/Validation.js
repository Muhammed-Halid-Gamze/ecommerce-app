import React from "react";
import * as Yup from "yup";

const Validation = Yup.object().shape({
  email: Yup.string().email("Please enter valid email...").required("Required"),
  password: Yup.string()
    .min(5, "Please enter at least 5 characters...")
    .required("Required"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords do not match..."
  ).required("Required"),
});

export default Validation;
