import initialState from "../store/initialState";
import * as actionTypes from "../actions/actionTypes";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOGIN_FORM:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.AUTHENTICATE:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...initialState,
        ...action.payload,
      };
    case actionTypes.CLOSE_LOGIN:
      return {
        ...state,
        showLoginForm: false,
      };
    case actionTypes.SHOW_PENDING_REQUESTS:
      return {
        ...state,
        showPendingRequests: true,
      };
    default:
      return state;
  }
};
export default rootReducer;
