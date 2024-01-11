import React from "react";
import AddCategory from "../../components/Admin/AddCategory";
import Typography from "@mui/material/Typography";

const AddCategoryPage = () => {
  return (
    <div>
      <Typography variant="body1" color="inherit">
        Add Category Page
      </Typography>
      <AddCategory />
    </div>
  );
};

export default AddCategoryPage;
