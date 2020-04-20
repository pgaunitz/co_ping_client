import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, Heading } from "grommet";
import { onLogout } from "../modules/authentication";

const LoginMessage = () => {
  const dispatch = useDispatch();
  const loginMessage = useSelector(state => state.loginMessage);
  return (
    <Box>
      <Heading level='3' id="welcome-message">{loginMessage}</Heading>
      <Button
        margin="small"
        color="white"
        label="Logout"
        onClick={() => onLogout(dispatch)}
      />
    </Box>
  );
};

export default LoginMessage;
