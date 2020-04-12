import React from "react";
import LoginButton from "./components/LoginButton";
import { useSelector } from "react-redux";
import LoginMessage from "./components/LoginMessage";
import LoginForm from "./components/LoginForm";
import { Grommet, Main, Heading } from "grommet";
import grommet from "grommet/themes";

const App = () => {
  const authenticated = useSelector((state) => state.authenticated);
  const showLoginForm = useSelector((state) => state.showLoginForm);

  return (
    <Grommet full theme={grommet}>
      <Main fill align="center" justify="center">
        <Heading level="1">CO-Ping!</Heading>
        {authenticated ? <LoginMessage /> : <LoginButton />}
        {showLoginForm && <LoginForm />}
      </Main>
    </Grommet>
  );
};

export default App;
