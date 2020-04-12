import React from 'react'
import { useSelector } from "react-redux"
import { Button, Box } from "grommet"

const LoginMessage = () => {
 const userName = useSelector(state => state.userName)
  return (
    <Box>
      {userName}
      <Button label="Logout" />
    </ Box>
  )
}

export default LoginMessage
