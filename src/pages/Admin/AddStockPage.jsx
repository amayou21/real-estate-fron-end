import React from "react";
import AddSeock from "../../components/Admin/AddSeock";
import Typography from "@mui/material/Typography";

const AddStockPage = () => {
  return (
    <div className="w-[100%]">
      <Typography variant="body1" color="inherit">
        Create Seock
      </Typography>
      <div className="flex justify-center items-center mt-4">
        <AddSeock />
      </div>
    </div>
  );
};

export default AddStockPage;
