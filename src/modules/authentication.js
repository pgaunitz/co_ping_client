import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: "https://co-ping.herokuapp.com/",
});

const onLogin = async (event, dispatch) => {
  try {
    event.preventDefault();
    let response = await auth.signIn(
      event.target.email.value,
      event.target.password.value
    );
    dispatch({
      type: "AUTHENTICATE",
      payload: {
        authenticated: true,
        userEmail: response.data.email,
        userName: response.data.name,
        loginMessage: `Welcome back ${response.data.name}`,
        showLoginForm: false,
      },
    });
  } catch (error) {
    debugger;
    let errorMessage = error.response.data.errors[0];
    dispatch({ type: "AUTHENTICATE", payload: { loginMessage: errorMessage } });
  }
};

const onLogout = (dispatch) => {
  auth.signOut().then(() => {
    dispatch({
      type: "AUTHENTICATE",
      payload: { authenticated: false, userEmail: null, userName: null },
    });
    dispatch({
      type: "LOGIN_MESSAGE",
      payload: { loginMessage: "Hasta la vista!" },
    });
  });
};

export { onLogin, onLogout };
