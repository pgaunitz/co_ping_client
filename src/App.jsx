import React from "react";
import LoginButton from "./components/LoginButton"
import { useSelector } from "react-redux"
import LoginMessage from "./components/LoginMessage"
import LoginForm from "./components/LoginForm"


const App = () => {
  const authenticated = useSelector(state => state.authenticated)
  const showLoginForm = useSelector(state => state.showLoginForm)
  
  return (
    <div id="all-app">
      <h1>CO-Ping!</h1>
      { authenticated ? <LoginMessage/> : <LoginButton />}
      {showLoginForm && <LoginForm /> }
    </div>
  );
};

export default App;
