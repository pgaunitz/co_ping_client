import React, { useEffect } from "react";
import { Box, Text, Heading } from "grommet";
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
    <Box id="request-container">
      <Heading level="3" id="request-header">
        Pending Requests to Community
      </Heading>

      <Box id="request-list" className="parallax">
        {displayRequests}
      </Box>
    </Box>
  );
};

export default PendingRequests;