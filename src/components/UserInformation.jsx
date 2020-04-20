import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Text } from "grommet";
import {
  getPendingRequests,
  acceptRequest,
  rejectRequest,
} from "../modules/requestAction";
import { SET_NAME } from "../state/actions/actionTypes";

const UserInformation = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const confirmationMessage = useSelector((state) => state.confirmationMessage);
  useEffect(() => {
    getPendingRequests(dispatch);
  }, []);

  const pendingRequests = useSelector((state) => state.pendingRequests);
  const communityId = useSelector((state) => state.communityId);

  let userInformation = pendingRequests.map((request) => {
    return (
      <Box id={`request-${request.id}`} key={request.id}>
        {userName !== request.name && (
          <>
            <Text>Name: {request.name}</Text>
            <Text>Email: {request.email}</Text>
            <Text>Phone: {request.phone_number}</Text>
            <Text>Address: {request.adress}</Text>
            <Box id="button-container">
              <Button
                color="#6FFFB0"
                className="accept"
                margin="small"
                label="Accept"
                id={`accept-request-${request.id}`}
                onClick={() => {
                  dispatch({
                    type: SET_NAME,
                    payload: { userName: request.name },
                  });
                  acceptRequest(request.id, communityId, dispatch);
                  getPendingRequests(dispatch);
                }}
              />
              <Button
                color="#FF4040"
                className="reject"
                margin="small"
                label="Reject"
                id={`reject-request-${request.id}`}
                onClick={() => {
                  dispatch({
                    type: SET_NAME,
                    payload: { userName: request.name },
                  });
                  rejectRequest(request.id, communityId, dispatch);
                  getPendingRequests(dispatch);
                }}
              />
            </Box>
          </>
        )}
      </Box>
    );
  });
  return (
    <>
      {confirmationMessage && (
        <Text id="confirmation-message">
          {`${userName} 
            ${confirmationMessage}`}
        </Text>
      )}
      <Box>{userInformation}</Box>
    </>
  );
};

export default UserInformation;
