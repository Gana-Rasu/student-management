import React from "react";
import "./Create.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useFormik } from "formik";
import * as yup from "yup";


// yup object with validations
const formVlidationSchema = yup.object({
  Name: yup.string().max(15).required("Name is compulsory"),
  Batch: yup.number().required("Batch is compulsory"),
  Course: yup.string().required("Course is compulsory"),
  Mentor: yup.string().max(15).required("Mentor is compulsory"),
});

function Create() {
  const navigate = useNavigate();

  // create operation
  const addData = (values) => {
    fetch(`https://62ac315ebd0e5d29af1cc1c8.mockapi.io/students`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    navigate("/");
  };

  // formik object with initial values, valdation schema, onsubmit
  const formik = useFormik({
    // all the values are capital because the api is given in capital
    initialValues: { Name: "", Batch: "", Course: "", Mentor: "" },
    validationSchema: formVlidationSchema,
    onSubmit: (values) => {
      // onsubmit the input values goes to the api through create operation function
      console.log(values);
      addData(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="inputs">
        {/* <Form> */}
        {/* <div className="inputs"> */}
        <TextField
          value={formik.values.Name}
          name="Name"
          id="outlined-basic"
          label="NAME"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={
            formik.touched.Name && formik.errors.Name ? formik.errors.Name : ""
          }
        />

        <br />
        <TextField
          value={formik.values.Batch}
          name="Batch"
          id="outlined-basic"
          label="BATCH"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={
            formik.touched.Batch && formik.errors.Batch
              ? formik.errors.Batch
              : ""
          }
        />

        <br />
        <TextField
          value={formik.values.Course}
          name="Course"
          id="outlined-basic"
          label="COURSE"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={
            formik.touched.Course && formik.errors.Course
              ? formik.errors.Course
              : ""
          }
        />

        <br />
        <TextField
          value={formik.values.Mentor}
          name="Mentor"
          id="outlined-basic"
          label="MENTOR"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={
            formik.touched.Mentor && formik.errors.Mentor
              ? formik.errors.Mentor
              : ""
          }
        />

        <br />

        <Button
          type="submit"
          variant="contained"
          // onClick={() => {
          //   fetch(`https://62ac315ebd0e5d29af1cc1c8.mockapi.io/students`, {
          //     method: "POST",
          //     body: JSON.stringify({
          //       Name: name,
          //       Batch: batch,
          //       Course: course,
          //       Mentor: mentor,
          //     }),
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //   }).then((response) => response.json());

          //   navigate("/");
          // }}
        >
          SUBMIT
        </Button>
      </form>
      <Button
        style={{ margin: "5%" }}
        variant="outlined"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => {
          navigate(-1);
        }}
      >
        BACK
      </Button>
      {/* </Form> */}
    </div>
  );
}

export default Create;
