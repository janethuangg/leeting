import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./css/DatePicker.css";
import "draft-js/dist/Draft.css";
import "./css/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Problems from "./components/Problems";
import Analytics from "./components/Analytics";

import React, { useState, useEffect } from "react";
// import EditExercise from "./components/edit-exercise.component";
import LogProblem from "./components/log-problem";
import SignUp from "./components/signup";
import Home from "./components/home";
import Calendar from "./components/Calendar";
import firebase from "./firebase";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("app use effect");
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser);
    // const currentUser = {
    //   uid: "2FWlZ47LDNYdthWMdUdmh0xNNCx2"
    // }
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <Router>
      <div className="container">
        <Navigation user={user} />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/problems" exact component={Problems} />
        {/* <Route path="/edit/:id" component={EditExercise} /> */}
        <Route path="/log-problem" component={LogProblem} />
        <Route path="/signup" component={SignUp} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/calendar" component={Calendar} />
      </div>
    </Router>
  );
}

export default App;
