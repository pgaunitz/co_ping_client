import React, { useEffect } from "react";
import { Box, Text } from "grommet";
import { getPendingRequests } from "../modules/requestAction";
import { useSelector, useDispatch } from 'react-redux';

const PendingRequests = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getPendingRequests(dispatch);
  }, []);

  const pendingRequests = useSelector(state => state.pendingRequests);
  const noRequestsMessage = useSelector(state => state.noRequestsMessage);

  let displayRequests
  if (pendingRequests) {
    displayRequests = pendingRequests.map((request) => {
      return (
        <Box id={`request-${request.id}`}>
          <Text>{request.name}</Text>
          <Text>{request.email}</Text>
          <Text>{request.phone_number}</Text>
          <Text>{request.adress}</Text>
        </Box>
      );
    })
  } else {
    displayRequests = <Text id='requests-message'>{noRequestsMessage}</Text>;
  }
  return (
    <Box>
      <Text id="request-header">Pending Requests to Community</Text>
      <Box id='request-list'>{displayRequests}</Box>
    </Box>
  );
};

export default PendingRequests;
