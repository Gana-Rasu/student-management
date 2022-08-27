import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Update() {
 
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [course, setCourse] = useState("");
  const [mentor, setMentor] = useState("");

  const { ID } = useParams();

  const navigate = useNavigate();

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
          value={name}
          id="outlined-basic"
          label="NAME"
          variant="outlined"
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
              `https://62ac315ebd0e5d29af1cc1c8.mockapi.io/students/${ID}`,{
                method:'PUT',
                body:JSON.stringify({
                  Name:name,
                  Course:course,
                  Mentor:mentor
                }),
                headers:{
                  "Content-Type":"application/json",
                },
              }
            ).then((response) => response.json())
            .then((data)=>console.log(data))

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
