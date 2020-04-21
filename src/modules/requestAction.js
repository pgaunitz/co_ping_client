import axios from "axios";
import {
  GET_PENDING_REQUESTS,
  CONFIRMATION_MESSAGE,
} from "../state/actions/actionTypes";

const getPendingRequests = async (dispatch) => {
  let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
  let response = await axios.get("/admin/communities", { headers: headers });
  if (response.data.users) {
    dispatch({
      type: GET_PENDING_REQUESTS,
      payload: { pendingRequests: response.data.users },
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
      user_admission: {
        community_id: communityId,
        community_status: "accepted",
        user_id: userId,
      }
    },
    { headers: headers },
  );
  dispatch({
    type: CONFIRMATION_MESSAGE,
    payload: { confirmationMessage: response.data.message },
  });
};

const rejectRequest = async (userId, communityId, dispatch) => {
  let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
  let response = await axios.put(
    `/admin/communities/${communityId}`,
    {
      user_admission: {
        community_id: communityId,
        community_status: "rejected",
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


export { getPendingRequests, acceptRequest, rejectRequest };
