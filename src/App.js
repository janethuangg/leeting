import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./css/DatePicker.css";
import 'draft-js/dist/Draft.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import ProblemList from "./components/ProblemList";
// import EditExercise from "./components/edit-exercise.component";
import LogProblem from "./components/log-problem";
import SignUp from "./components/signup";
import Home from "./components/home";

function App() {
 return (
  <Router>
    <link rel="stylesheet" href="bootstrap-multiselect.css" type="text/css" />

   <div className="container">
     <Navbar />
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/problems" exact component={ProblemList} />
      {/* <Route path="/edit/:id" component={EditExercise} /> */}
      <Route path="/log-problem" component={LogProblem} />
      <Route path="/signup" component={SignUp} />
   </div>
  </Router>
 );
}
 
export default App; 
