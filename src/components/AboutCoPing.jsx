import React from "react";
import { Button, Box, Text, Heading } from "grommet";

const AboutCoPing = () => {
  return (
    <>
      <Box
        id="info-box"
        alignContent="center"
        width="large"
        border={{ color: "white", size: "medium" }}
        pad="large"
        margin="small"
        round="medium"
      >
        <Heading level="3" alignSelf="center" margin="small" >Not yet a member?</Heading>
        <Text textAlign="center">
          Be the one who brings your neighborhood closer with Co-Ping, the
          cooperative shopping app.  
          Together you save time and money on grocery
          trips while getting to know each other as well as reducing
          consumption. <br/> <br/>Sign up for a free month and discover many more benefits
          with Co-Ping. <br/> 
          Send us a request with your community details and you will get the credentials from us.
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

export default AboutCoPing;
