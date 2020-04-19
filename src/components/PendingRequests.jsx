import React, { useEffect} from 'react'
import { Box, Text } from "grommet";
import { getPendingRequests } from "../modules/requestAction"

const PendingRequests = () => {
  useEffect( () => {
    getPendingRequests()
  }, [])
  return (
    <Box>
      <Text id='request-header'>
        Pending Requests to Community
      </Text>
      
    </Box>
  )
}

export default PendingRequests
