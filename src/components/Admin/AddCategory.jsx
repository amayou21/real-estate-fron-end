import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddCategory = () => {
  return (
    <div className="mb-20" component="form">
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div >
          <Typography variant="body1" color="inherit">
            Upload Category Images
          </Typography>
          <IconButton
            component="label"
            variant="contained"
            sx={{
              "&:hover": {
                backgroundColor: "transparent", // Set the background color to transparent on hover
              },
            }}
          >
            <CloudUploadIcon sx={{ fontSize: "80px" }} />

            <VisuallyHiddenInput type="file" />
          </IconButton>
        </div>
        <TextField
          required
          multiline
          fullWidth
          id="outlined-multiline-flexible"
          label="Name"
          placeholder="Name"
          variant="outlined"
        />
      </Box>
      <Box className="px-2 mt-2 flex justify-end">
        <Button variant="contained">create</Button>
      </Box>
    </div>
  );
};

export default AddCategory;
