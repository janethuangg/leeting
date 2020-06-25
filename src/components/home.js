import React, { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import firebase from "../firebase.js";

const client_id = "b93f969361e10dc65659";
const client_secret = "22a4714781a68d3996fd09576a4548a98fac6a0e";

const Home = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <div className="tc">
      <h1>Welcome {user.displayName}!</h1>
    </div>
  );
};

export default Home;
