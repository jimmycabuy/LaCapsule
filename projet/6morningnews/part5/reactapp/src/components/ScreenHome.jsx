import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
import { Input, Button } from "antd";
import { connect } from "react-redux";

function ScreenHome(props) {
  // signUp useState
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSgnUpPassword] = useState("");
  const [isSign, setIsSign] = useState(false);
  const [errorSignUp, setErrorSignUp] = useState("");
  const [token, setToken] = useState("");
  const [tokenSignUp, setTokenSignUp] = useState("");

  // signIn useState
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSgnInPassword] = useState("");
  const [errorSignIn, setErrorSignIn] = useState("");

  async function getArticles(token) {
    var data = await fetch (`/wishlist/${token}`)
    var body = await data.json()
    if(body.result && body.articles){
      body.articles.forEach(article => props.importArticle(article))
    }
  }

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
      // setIsSign(true);
      setTokenSignUp(`Votre token est : ${bodySignUp.newUser.token}`)
      props.addToken(bodySignUp.newUser.token)
      getArticles(bodySignUp.newUser.token)
    }
  };

  var handleSubmitSignIn = async () => {
    const dataSignIn = await fetch ("/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `username=${signInUsername}&password=${signInPassword}&token=${token}`,
    })
    
    const bodySignIn = await dataSignIn.json();
    var messageErreurSignIn = bodySignIn.error;
    setErrorSignIn(messageErreurSignIn);
    if (messageErreurSignIn[0] === "success"){
      setIsSign(true);
      props.addToken(bodySignIn.user.token)
      getArticles(bodySignIn.user.token)
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

        <Input style={{ marginBottom: "10px" }} className="Login-input" placeholder="token" onChange={(e) => setToken(e.target.value)}
          value={token} />

        <Button onClick={() => handleSubmitSignIn()} >
          Sign-in
        </Button>
      </div>

      {/* SIGN-UP */}

      <div className="Sign">
      <span style={{ color:"black"}}>{tokenSignUp}</span>
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
        
        <Button onClick={() => handleSubmitSignUp()}>
          Sign-up
        </Button>
        
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      dispatch({type: 'addToken', token: token})
    },
    importArticle : function(articles){
      dispatch({type: "importArticles", articles})
    }
  }
  }
  export default connect(
  null,
  mapDispatchToProps
  )(ScreenHome)

// export default ScreenHome;