import React from "react";
import { Avatar, IconButton, Paper } from "@mui/material";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import img4 from "../../images/img4.jpg";
const OtherClientRating = () => {
  return (
    <Paper className="p-2 my-2 ">
      <div className="flex items-center">
        <IconButton>
          <Avatar src={img4} sx={{ width: 24, height: 24 }} />
        </IconButton>
        <p>User Name</p>
      </div>
      <div className=" flex ml-4 px-3">
        <TimelineSeparator>
          <TimelineDot color="secondary" />
        </TimelineSeparator>
        <TimelineContent className="p-0">User comment</TimelineContent>
      </div>
    </Paper>
  );
};

export default OtherClientRating;
