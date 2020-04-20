import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Text } from "grommet";
import { getPendingRequests, acceptRequest, rejectRequest } from "../modules/requestAction";
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
            <Text>{request.name}</Text>
            <Text>{request.email}</Text>
            <Text>{request.phone_number}</Text>
            <Text>{request.adress}</Text>
            <Button
              margin="small"
              color="white"
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
              margin="small"
              color="white"
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
          </>
        )}
      </Box>
    );
  });
  return (
    <>
      {confirmationMessage &&
        <Text id="confirmation-message">
          {`${userName} 
            ${confirmationMessage}`}
        </Text>}
      <Box>{userInformation}</Box>
    </>
  );
};

export default UserInformation;
