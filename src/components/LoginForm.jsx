import React from 'react';
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch()

  return (
    <Box>
      <Form id="login-form" onSubmit={event => onLogin(event, dispatch)}>
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
