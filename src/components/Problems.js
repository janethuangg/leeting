import React, { useState, useEffect } from "react";
import axios from "axios";
import Problem from "./Problem";
import firebase from "../firebase.js";
import { useHistory } from "react-router-dom";

const Problems = (props) => {
  const [problems, setProblems] = useState([]);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    // const currentUser = firebase.auth().currentUser;
    const currentUser = {
      uid: "2FWlZ47LDNYdthWMdUdmh0xNNCx2"
    }

    if (currentUser) {
      setUser(currentUser);

      axios
        .get(`http://localhost:5000/problems/user/${currentUser.uid}`)
        .then((res) => setProblems(res.data));
    } else {
      history.push("/signup");
    }
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/problems/${id.id}`)
      .then(
        setProblems((prev) => prev.filter((problem) => problem._id !== id.id))
      );
  };

  return (
    <div className = 'container w-100'> 
    <h1>Problems</h1>
        <div className="card-container">
          {problems.map((problem, i) => {
            return (
              <Problem
                id={problems[i]._id}
                key={i}
                number={problems[i].number}
                title={problems[i].title}
                difficulty={problems[i].difficulty}
                topics={problems[i].topics}
                notes={problems[i].notes}
                date={problems[i].date}
                handleDelete={handleDelete}
              />
          );
        })}
      </div>
    </div>
  );
};

export default Problems;
