import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'draft-js/dist/Draft.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import ProblemsList from "./components/problems-list";
// import EditExercise from "./components/edit-exercise.component";
import LogProblem from "./components/log-problem";
import SignUp from "./components/signup";
import Home from "./components/home";

function App() {
 return (
  <Router>
   <div className="container">
     <Navbar />
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/problems" exact component={ProblemsList} />
      {/* <Route path="/edit/:id" component={EditExercise} /> */}
      <Route path="/log-problem" component={LogProblem} />
      <Route path="/signup" component={SignUp} />
   </div>
  </Router>
 );
}
 
export default App; 
