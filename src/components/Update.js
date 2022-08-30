import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Update() {

  // setting up the initial values and next values that will change after input using usestate

  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [course, setCourse] = useState("");
  const [mentor, setMentor] = useState("");

  // getting the id in url using use params 
  const { ID } = useParams();

  const navigate = useNavigate();


  // if id is present proceed to fetch and set the text field with the already given input
  useEffect(() => {
    if (ID)
      fetch(`https://62ac315ebd0e5d29af1cc1c8.mockapi.io/students/${ID}`)
        .then((response) => response.json())
        .then((data) => {
          setName(data.Name);
          setBatch(data.Batch);
          setCourse(data.Course);
          setMentor(data.Mentor);
        });
  }, [ID]);

  return (
    <div>
      <div className="inputs">
        <TextField
        // value displays the present data
          value={name}
          id="outlined-basic"
          label="NAME"
          variant="outlined"
          // the input value is taken for every click
          onChange={(event) => setName(event.target.value)}
        />
        <br />

        <TextField
          value={batch}
          id="outlined-basic"
          label="BATCH"
          variant="outlined"
          onChange={(event) => setBatch(event.target.value)}
        />
        <br />

        <TextField
          value={course}
          id="outlined-basic"
          label="COURSE"
          variant="outlined"
          onChange={(event) => setCourse(event.target.value)}
        />
        <br />
        <TextField
          value={mentor}
          id="outlined-basic"
          label="MENTOR"
          variant="outlined"
          onChange={(event) => setMentor(event.target.value)}
        />
        <br />

        <Button
          variant="contained"
          onClick={() => {
            fetch(
              `https://62ac315ebd0e5d29af1cc1c8.mockapi.io/students/${ID}`,
              {
                method: "PUT",
                // after click the input data gets added to the mock api
                body: JSON.stringify({
                  Name: name,
                  Batch: batch,
                  Course: course,
                  Mentor: mentor,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then((response) => response.json())
              .then((data) => console.log(data));

            navigate("/");
          }}
        >
          EDIT
        </Button>
      </div>

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
    </div>
  );
}

export default Update;
