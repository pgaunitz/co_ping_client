import React from "react";
import { Button } from "grommet";
import { useDispatch } from "react-redux";
import { SHOW_LOGIN_FORM } from "../state/actions/actionTypes";

const LoginButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      color="white"
      label="Login"
      onClick={() =>
        dispatch({ type: SHOW_LOGIN_FORM, payload: { showLoginForm: true } })
      }
    />
  );
};

export default LoginButton;
