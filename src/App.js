import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Create from "./components/Create";
import Update from "./components/Update";
import Home from "./components/Home";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Formdemo from "./components/Formdemo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar className="appbar" position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                STUDENT MANAGEMENT
              </Typography>

              <Button className="create"> <Link to="/create">CREATE</Link></Button>
             
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:ID" element={<Update />} />
          <Route path="/form" element={<Formdemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
