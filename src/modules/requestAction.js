import axios from "axios";
import { GET_PENDING_REQUESTS } from "../state/actions/actionTypes";

const getPendingRequests = async (dispatch) => {
  let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
  let response = await axios.get("/admin/communities", { headers: headers });
  if (response.data.requests) {
    dispatch({
      type: GET_PENDING_REQUESTS,
      payload: { pendingRequests: response.data.requests },
    });
  } else {
    dispatch({
      type: GET_PENDING_REQUESTS,
      payload: { noRequestsMessage: response.data.message },
    });
  }
};

export { getPendingRequests };
