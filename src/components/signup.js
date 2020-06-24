import React from 'react';
import {Button} from 'react-bootstrap'
import axios from 'axios';
import firebase from '../firebase.js'
import { useHistory } from "react-router-dom";

const client_id = 'b93f969361e10dc65659'
const client_secret = '22a4714781a68d3996fd09576a4548a98fac6a0e'
const authorization_url = "https://github.com/login/oauth/authorize?client_id=" + client_id

export const SignUp = () => {
    var provider = new firebase.auth.GithubAuthProvider();
    const history = useHistory();

    // axios.get("https://github.com/login/oauth/authorize")
    //     .then(res => console.log(res.data)); 

    const signin = () => {
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        history.push("/");
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
    
    
    return (
      <Button onClick={signin}>
        Login with github
      </Button> 
    )
}

export default SignUp;
  