import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Form, TextInput, Button, Text } from "grommet";
import { onLogin } from "../modules/authentication";

const LoginForm = () => {
  const dispatch = useDispatch();
  const loginMessage = useSelector((state) => state.loginMessage);

  return (
    <Box>
      <Form id="login-form" onSubmit={(event) => onLogin(event, dispatch)}>
        <TextInput id="email" name="email" placeholder="email" />
        <TextInput
          id="password"
          name="password"
          type="password"
          placeholder="password"
        />
        <Button color="white" type="submit" label="Submit" />
        <Button color="white" label="Back" onClick={() => dispatch({type: "CLOSE_LOGIN"})} />
      </Form>
      <Text id="login-error-message">{loginMessage}</Text>
    </Box>
  );
};

export default LoginForm;
