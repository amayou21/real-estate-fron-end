import React from "react";
import { Paper } from "@mui/material";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const OtherClientRating = () => {
  return (
    <Paper className="p-2 my-2 ">
      <div className=" flex">
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
        </TimelineSeparator>

        <TimelineContent>User Name</TimelineContent>
      </div>
      <div className=" flex ml-3 p-0">
        <TimelineSeparator>
          <TimelineDot color="secondary" />
        </TimelineSeparator>
        <TimelineContent className="p-0">Client coment</TimelineContent>
      </div>
    </Paper>
  );
};

export default OtherClientRating;
