import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./css/DatePicker.css";
import "draft-js/dist/Draft.css";
import "./css/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Problems from "./components/Problems";
import Analytics from "./components/Analytics";
import { Container } from "react-bootstrap";

import React, { useState, useEffect } from "react";
// import EditExercise from "./components/edit-exercise.component";
import LogProblem from "./components/LogProblem";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import Calendar from "./components/Calendar";
import firebase from "./firebase";
import { AuthProvider } from "./auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Container style={{ marginTop: 100 }}>
          <Route path="/" exact component={Home} />
          <Route path="/problems" exact component={Problems} />
          {/* <Route path="/edit/:id" component={EditExercise} /> */}
          <Route path="/log-problem" component={LogProblem} />
          <Route path="/signup" component={SignUp} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/calendar" component={Calendar} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
