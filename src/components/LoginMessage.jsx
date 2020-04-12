import React from "react";
import { useSelector } from "react-redux";
import { Button, Box, Text } from "grommet";

const LoginMessage = () => {
  const loginMessage = useSelector((state) => state.loginMessage);
  return (
    <Box>
      <Text id="welcome-message">{loginMessage}</Text>
      <Button label="Logout" />
    </Box>
  );
};

export default LoginMessage;
