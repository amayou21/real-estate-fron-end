import { Paper } from "@mui/material";
import React from "react";
import location from "../../images/location.jpg";
const HomeLocation = () => {
  return (
    <div className="flex items-end my-2 ">
      <div>
        <p className="p-2">View Home Location</p>

        <Paper className="flex items-center justify-center ">
          <div className="relative w-full h-full">
            <img
              src={location}
              alt="home location"
              className="rounded w-full  h-full "
            />
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default HomeLocation;
