import React from 'react'
import { Box, Text } from 'grommet';

const NotAdmin = () => {
  return (
    <Box>
      <Text id='not-authorized-message'>
        This website is only for your community admin.<br/> 
        You are only authorized to use the Co-Ping app.
      </Text>
    </Box>
  );
}

export default NotAdmin
