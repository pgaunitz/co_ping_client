import React, { useState } from "react";
import LoginButton from "./components/LoginButton";
import { useSelector } from "react-redux";
import LoginMessage from "./components/LoginMessage";
import LoginForm from "./components/LoginForm";
import { Grommet, Main, Image, Button } from "grommet";
import grommet from "grommet/themes";
import co_ping_Logo2 from "./images/co_ping_Logo2.png";
import NotAdmin from "./components/NotAdmin";
import Admin from "./components/Admin";
import PendingRequests from "./components/PendingRequests";
import { Route } from "react-router";
import { Link } from "react-router-dom";

const App = () => {
  const authenticated = useSelector(state => state.authenticated);
  const showLoginForm = useSelector(state => state.showLoginForm);
  const userRole = useSelector((state) => state.userRole);

  return (
    <Grommet full theme={grommet}>
      <Main fill align="center" justify="center">
        <img src={co_ping_Logo2}></img>
        {authenticated ? <LoginMessage /> : <LoginButton />}
        {showLoginForm && <LoginForm />}
        {userRole == "user" && <NotAdmin />}
        {userRole === 'admin' && <Admin />}
      </Main>
    </Grommet>
  );
};

export default App;
