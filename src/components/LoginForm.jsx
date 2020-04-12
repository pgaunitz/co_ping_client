import React from 'react';
import { useDispatch } from "react-redux";
import { Box, Form, TextInput, Button } from "grommet"
import { onLogin } from "../modules/authentication"

const LoginForm = () => {
  const dispatch = useDispatch()

  return (
    <Box>
      <Form id="login-form" onSubmit={event => onLogin(event)}>
        <TextInput id="email" name="email" placeholder="email" />
        <TextInput
          id="password"
          name="password"
          type="password"
          placeholder="password"
        />
        <Button
          type="submit"
          label="Submit"
        />
      </Form>
      <Button label="back" />
    </Box>
  )
}

export default LoginForm
