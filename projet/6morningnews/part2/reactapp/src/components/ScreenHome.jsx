import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
import { Input, Button } from "antd";

function ScreenHome() {
  // signUp useState
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSgnUpPassword] = useState("");
  const [isSign, setIsSign] = useState(false);
  const [errorSignUp, setErrorSignUp] = useState("");

  // signIn useState
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSgnInPassword] = useState("");
  const [errorSignIn, setErrorSignIn] = useState("");

  var handleSubmitSignUp = async () => {
    const dataSignUp = await fetch ("/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `username=${signUpUsername}&email=${signUpEmail}&password=${signUpPassword}`,
    })
    const bodySignUp = await dataSignUp.json();
    var messageErreurSignUp = bodySignUp.error;
    setErrorSignUp(messageErreurSignUp);
    if (bodySignUp.error.length === 0){
      setIsSign(true);
    }
  };

  var handleSubmitSignIn = async () => {
    const dataSignIn = await fetch ("/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `username=${signInUsername}&password=${signInPassword}`,
    })
    
    const bodySignIn = await dataSignIn.json();
    var messageErreurSignIn = bodySignIn.error;
    setErrorSignIn(messageErreurSignIn);
    if (bodySignIn.user !== null){
      setIsSign(true);
    }
  };

  if(isSign){
     return <Redirect to="/screensource"/>
  }

  return (
    <div className="Login-page">
      {/* SIGN-IN */}

      <div className="Sign">
      <span style={{ color:"red"}}>{errorSignIn}</span>
        <Input style={{ marginBottom: "10px" }} className="Login-input" placeholder="username" onChange={(e) => setSignInUsername(e.target.value)}
          value={signInUsername} />
 
        <Input.Password style={{ marginBottom: "10px" }} className="Login-input" placeholder="password" onChange={(e) => setSgnInPassword(e.target.value)}
          value={signInPassword} />

        <Button style={{ width: "80px" }} onClick={() => handleSubmitSignIn()} >
          Sign-in
        </Button>
      </div>

      {/* SIGN-UP */}

      <div className="Sign">
      <span style={{ color:"red"}}>{errorSignUp}</span>
        <Input style={{ marginBottom: "10px" }}
          className="Login-input"
          placeholder="username"
          onChange={(e) => setSignUpUsername(e.target.value)}
          value={signUpUsername}
        />
        <Input style={{ marginBottom: "10px" }} className="Login-input" placeholder="email" onChange={(e) => setSignUpEmail(e.target.value)}
          value={signUpEmail} />
        <Input.Password style={{ marginBottom: "10px" }} className="Login-input" placeholder="password" onChange={(e) => setSgnUpPassword(e.target.value)}
          value={signUpPassword} />
        
        <Button style={{ width: "80px" }} onClick={() => handleSubmitSignUp()}>
          Sign-up
        </Button>
        
      </div>
    </div>
  );
}

export default ScreenHome;