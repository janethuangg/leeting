import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Problem from "./Problem";
import { AuthContext } from "../auth.js";
import { useHistory } from "react-router-dom";

const Problems = (props) => {
  const [problems, setProblems] = useState([]);
  const {currentUser} = useContext(AuthContext)
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
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
    <div className="container w-100">
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
