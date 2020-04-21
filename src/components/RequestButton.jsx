import React from "react";
import { Button } from "grommet";

const RequestButton = () => {
  return (
    <Button
      margin="small"
      color="white"
      label="Send Community Request"
      href="mailto:coping@mail.com"
      subject="Request for new community"
    />
  );
};

export default RequestButton;
