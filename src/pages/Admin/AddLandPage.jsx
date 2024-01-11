import React from "react";
import AddLand from "../../components/Admin/AddLand";
import Typography from "@mui/material/Typography";

const AddLandPage = () => {
  return (
    <div className="w-[100%]">
      <Typography variant="body1" color="inherit">
        Create Land 
      </Typography>
      <div className="flex justify-center items-center mt-4">
        <AddLand />
      </div>
    </div>
  );
};

export default AddLandPage;
