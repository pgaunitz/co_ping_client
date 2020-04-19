import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, Text } from "grommet";
import { onLogout } from "../modules/authentication";

const LoginMessage = () => {
  const dispatch = useDispatch();
  const loginMessage = useSelector(state => state.loginMessage);
  return (
    <Box>
      <Text id="welcome-message">{loginMessage}</Text>
      <Button label="Logout" onClick={() => onLogout(dispatch)} />
    </Box>
  );
};

export default LoginMessage;
