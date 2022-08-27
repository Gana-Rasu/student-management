import React, { useEffect, useState } from "react";
import Studentcard from "./Studentcard";
import "./Home.css";

// const studentData = [{
//     "id": "1",
//     "name": "Gana",
//     "course": "Full stack",
//     "mentor": "Varun"
// },
// {
//     "id": "2",
//     "name": "Ishu",
//     "course": "Full stack",
//     "mentor": "Varun"
// },
// {
//     "id": "3",
//     "name": "Ashok",
//     "course": "Full stack",
//     "mentor": "Varun"
// },
// {
//     "id": "4",
//     "name": "Logan",
//     "course": "Testing",
//     "mentor": "Imran"
// }
// ]

function Home() {
  const [studentData, setData] = useState([]);

  const getData = ()=>{
    fetch("https://62ac315ebd0e5d29af1cc1c8.mockapi.io/students")
    .then((response) => response.json())
    .then((studentData) => setData(studentData));
}
  

  useEffect(() => getData(), []);

  return (
    <div className="home">
      {studentData.map((data, index) => (
        <Studentcard
          key={index}
          // name={data.name}
          sno={index+1}
          data={data}
          getData={getData}
          // course={data.course}
          // mentor={data.mentor}
        />
      ))}
    </div>
  );
}

export default Home;
