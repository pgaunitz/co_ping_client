import React from "react";
import PendingRequests from "./PendingRequests";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "grommet";
import {SHOW_PENDING_REQUESTS} from "../state/actions/actionTypes" 

const Admin = () => {
  const dispatch = useDispatch();
  const showPendingRequests = useSelector(state => state.showPendingRequests)
  return (
    <>
      <Button
        margin="small"
        color="white"
        label="Pending Requests"
        id="show-requests"
        onClick={() => dispatch({ type: SHOW_PENDING_REQUESTS })}
      />
      {showPendingRequests && <PendingRequests />}
    </>
  );
};

export default Admin;
