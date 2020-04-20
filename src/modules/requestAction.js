import axios from "axios";
import {
  GET_PENDING_REQUESTS,
  CONFIRMATION_MESSAGE,
} from "../state/actions/actionTypes";

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

const acceptRequest = async (userId, communityId, dispatch) => {
  let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
  let response = await axios.put(
    `/admin/communities/${communityId}`,
    {
      user_admisson: {
        community_id: communityId,
        community_status: "accepted",
        user_id: userId,
      },
    },
    { headers: headers }
  );
  dispatch({
    type: CONFIRMATION_MESSAGE,
    payload: { confirmationMessage: response.data.message },
  });
};


export { getPendingRequests, acceptRequest };
