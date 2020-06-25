import React, { useState } from "react";
import axios from "axios";

const Analytics = () => {
  const [diff, setdiff] = useState("");
  const [count, setCount] = useState("");

  const handleClick = (e) => {
    const buttonDiff = e.currentTarget.textContent;
    setdiff(buttonDiff);
    axios
      .get(`http://localhost:5000/problems/analytics/${buttonDiff}`)
      .then((res) => setCount(res.data.length));
  };

  return (
    <>
      <h4>Analytics Page</h4>
      <p>
        {count} {diff}
      </p>
      <button onClick={(e) => handleClick(e)}>Easy</button>
      <button onClick={(e) => handleClick(e)}>Medium</button>
      <button onClick={(e) => handleClick(e)}>Hard</button>
    </>
  );
};

export default Analytics;
