import React from "react";
import "./Studentcard.css";
import { useNavigate} from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function Studentcard({data,sno,getData}) {

  const navigate = useNavigate();

  return (
    <div className="student">
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Id : {sno}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Name : {data.Name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Batch : {data.Batch}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Course : {data.Course}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Mentor : {data.Mentor}
          </Typography>
        </CardContent>

        {/* edit and delete */}
        <div className="buttons">
          <CardActions>
              <Button size="small" onClick={()=>{navigate(`/update/${data.id}`)}} >EDIT</Button>
          </CardActions>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                fetch(
                  `https://62ac315ebd0e5d29af1cc1c8.mockapi.io/students/${data.id}`,
                  {
                    method: "DELETE",
                  }
                ).then((response) => response.json())
                .then((data)=>getData());
              }}
            >
              DELETE
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

export default Studentcard;
