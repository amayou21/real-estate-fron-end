import React from "react";
import Typography from "@mui/material/Typography";
import AddHome from "../../components/Admin/AddHome";

const AddHomePage = () => {
  return (
    <div className="w-[100%]">
      <Typography variant="body1" color="inherit">
        Create House
      </Typography>
      <div className="flex justify-center items-center mt-4">
        <AddHome />
      </div>
    </div>
  );
};

export default AddHomePage;
