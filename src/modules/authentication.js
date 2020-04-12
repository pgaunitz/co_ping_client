import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: "https://co-ping.herokuapp.com/",
});

const onLogin = (event, dispatch) => {
  event.preventDefault();
  auth
    .signIn(
      event.target.elements.email.value,
      event.target.elements.passwords.value
    )
    .then((response) => {
      dispatch({
        type: "AUTHENTICATE",
        payload: {
          authenticated: true,
          userEmail: response.data.email,
          userName: response.data.name,
        },
      });
      dispatch({ type: "LOGIN_MESSAGE", payload: `Welcome Back` });
    })
    .catch((error) => {
      let errorMessage = error.response.data.errors[0];
      dispatch({ type: "LOGIN_MESSAGE", payload: errorMessage });
    });
};

const onLogout = (dispatch) => {
  auth.signOut().then(() => {
    dispatch({
      type: "AUTHENTICATE",
      payload: { authenticated: false, userEmail: null, userName: null },
    });
    dispatch({ type: "LOGIN_MESSAGE", payload: "Hasta la vista!" });
  });
};

export { onLogin, onLogout };
