import React from "react";
// import formik first
import { useFormik } from "formik";
import * as yup from "yup";

// with the yup object set the required validations
const formValidationSchema = yup.object({
  email: yup.string().min(5).required("Email is compulsory"),
  password: yup.string().min(8, "need a bigger password").max(15),
});

function Formdemo() {
    // the useformik hook takes objects, validation schema and handlesubmit
  const formik = useFormik({
    // declare the fields that needs formik access
    // the names given shoould be same to the name given in the fields
    initialValues: { email: "", password: "" },
    // import yup
    // declare the validation schema with any name
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onsubmit", values);
    },
  });
  return (
    // formik will handle the submit
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        // formik will take the value in the fields comparing the given name and initalvalues
        value={formik.values.email}
        placeholder="enter mail id"
        // to change the data
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      { formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <input
        type="password"
        name="password"
        value={formik.values.password}
        placeholder="enter password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      { formik.touched.password &&  formik.errors.password ? formik.errors.password : "" }
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default Formdemo;
