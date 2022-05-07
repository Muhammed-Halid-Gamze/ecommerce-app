import React from "react";
import * as Yup from "yup";

const Validation = Yup.object().shape({
  name: Yup.string().min(3, "It's too short").required("Required"),
  email: Yup.string().email("Please enter valid email...").required("Required"),
  password: Yup.string()
    .min(5, "Your password should be at least 5 characters...")
    .required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords not match...")
    .required("Required"),
  gender: Yup.string()
    .oneOf(["male", "female"], "required")
    .required("Required"),
  acceptTerms: Yup.string().oneOf(["true"], "Accept the terms and conditions"),
});

export default Validation;
