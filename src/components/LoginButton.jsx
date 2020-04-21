import React from "react";
import { Button } from "grommet";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_LOGIN_FORM } from "../state/actions/actionTypes";

const LoginButton = () => {
  const dispatch = useDispatch();
  const logoutMessage = useSelector((state) => state.logoutMessage);
  const authenticated = useSelector((state) => state.authenticated);

  return (
    <>
      <Button
        margin="large"
        color="white"
        label="Login"
        onClick={() =>
          dispatch({ type: SHOW_LOGIN_FORM, payload: { showLoginForm: true } })
        }
      />
      <div id="logout-message">{!authenticated && logoutMessage}</div>
    </>
  );
};

export default LoginButton;
