import React, { useEffect } from "react";
import { Box, Text } from "grommet";
import { getPendingRequests } from "../modules/requestAction";
import { useSelector, useDispatch } from 'react-redux';
import UserInformation from "./UserInformation";

const PendingRequests = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPendingRequests(dispatch);
  }, []);

  const pendingRequests = useSelector(state => state.pendingRequests);
  const noRequestsMessage = useSelector(state => state.noRequestsMessage);
  
  let displayRequests;
  if (pendingRequests) {
    displayRequests = <UserInformation />;
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
