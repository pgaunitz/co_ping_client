import React from "react";
import LoginButton from "./components/LoginButton";
import { useSelector } from "react-redux";
import LoginMessage from "./components/LoginMessage";
import LoginForm from "./components/LoginForm";
import { Grommet, Main, Image } from "grommet";
import grommet from "grommet/themes";
import co_ping_Logo2 from "./images/co_ping_Logo2.png";

const App = () => {
  const authenticated = useSelector(state => state.authenticated);
  const showLoginForm = useSelector(state => state.showLoginForm);

  return (
    <Grommet full theme={grommet}>
      <Main fill align="center" justify="center">
        <img src={co_ping_Logo2}></img>
        {authenticated ? <LoginMessage /> : <LoginButton />}
        {showLoginForm && <LoginForm />}
      </Main>
    </Grommet>
  );
};

export default App;
