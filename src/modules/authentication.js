import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: "https://co-ping.herokuapp.com/",
});

const onLogin = async (event, dispatch) => {
  debugger
  try {
  event.preventDefault();
  let response = await auth
    .signIn(event.target.email.value, event.target.passwords.value) 
      dispatch({
        type: "AUTHENTICATE",
        payload: {
          authenticated: true,
          userEmail: response.data.email,
          userName: response.data.name
        }
      });
      dispatch({
        type: "LOGIN_MESSAGE",
        payload: {
          message: `Welcome Back ${response.data.name}`,
          showLoginForm: false,
        },
      });
  } catch(error) {
    debugger
      let errorMessage = error.response.data.errors[0];
      dispatch({ type: "LOGIN_MESSAGE", payload: { message: errorMessage } });
    };
};

const onLogout = (dispatch) => {
  auth.signOut().then(() => {
    dispatch({
      type: "AUTHENTICATE",
      payload: { authenticated: false, userEmail: null, userName: null },
    });
    dispatch({
      type: "LOGIN_MESSAGE",
      payload: { message: "Hasta la vista!" },
    });
  });
};

export { onLogin, onLogout };
