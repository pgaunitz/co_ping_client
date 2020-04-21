import React from "react";
import { Button, Box, Text } from "grommet";

const RequestButton = () => {
  return (
    <>
      <Box
        id="info-box"
        alignContent="center"
        width="medium"
        border={{ color: "white", size: "medium" }}
        pad="medium"
        margin="small"
        round="medium"
      >
        <Text textAlign="center">
          Do you have a community and want to join? Do you have a community and
          want to join? Do you have a community and want to join? Do you have a
          community and want to join? Do you have a community and want to join?
        </Text>
      </Box>
      <Button
        id="contact-button"
        margin="small"
        color="white"
        label="Send Community Request"
        href="mailto:coping@mail.com"
        subject="Request for new community"
      />
    </>
  );
};

export default RequestButton;
