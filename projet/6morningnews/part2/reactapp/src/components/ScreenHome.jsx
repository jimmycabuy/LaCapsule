import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
import { Input, Button } from "antd";

function ScreenHome() {
  // signUp useStateeeeeeee
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSgnUpPassword] = useState("");
  const [isSign, setIsSign] = useState(false);
  // signIn useState
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSgnInPassword] = useState("");


  var handleSubmitSignUp = async () => {
    await fetch ("/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `username=${signUpUsername}&email=${signUpEmail}&password=${signUpPassword}`,
    })
    setIsSign(true);
  };

  var handleSubmitSignIn = async () => {
    const data = await fetch ("/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `username=${signInUsername}&password=${signInPassword}`,
    })
    
    const body = await data.json();
    console.log(body)
    if (body.user !== null){
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
        <Input className="Login-input" placeholder="username" onChange={(e) => setSignInUsername(e.target.value)}
          value={signInUsername} />
 
        <Input.Password className="Login-input" placeholder="password" onChange={(e) => setSgnInPassword(e.target.value)}
          value={signInPassword} />

        <Button style={{ width: "80px" }} type="primary" onClick={() => handleSubmitSignIn()} >
          Sign-in
        </Button>
      </div>

      {/* SIGN-UP */}

      <div className="Sign">
        <Input
          className="Login-input"
          placeholder="username"
          onChange={(e) => setSignUpUsername(e.target.value)}
          value={signUpUsername}
        />
        <Input className="Login-input" placeholder="email" onChange={(e) => setSignUpEmail(e.target.value)}
          value={signUpEmail} />
        <Input.Password className="Login-input" placeholder="password" onChange={(e) => setSgnUpPassword(e.target.value)}
          value={signUpPassword} />

        <Button style={{ width: "80px" }} type="primary" onClick={() => handleSubmitSignUp()}>
          Sign-up
        </Button>
      </div>
    </div>
  );
}

export default ScreenHome;
