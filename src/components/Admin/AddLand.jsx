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

const AddLand = () => {
  return (
    <div className="mb-20" component="form">
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <Typography variant="body1" color="inherit">
            Upload Land Images
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
        <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2">
          <TextField
            required
            id="outlined-required"
            label="Title"
            placeholder="Title"
          />
          <TextField
            required
            id="outlined-required"
            label="Statuse"
            placeholder="statuse"
          />
          <TextField
            required
            id="outlined-required"
            label="Category"
            placeholder="Category"
          />
          <TextField
            required
            type="number"
            id="outlined-required"
            label="Price"
            placeholder="Price"
          />
          <TextField
            required
            id="outlined-required"
            label="Location"
            placeholder="Location"
          />
          <TextField
            required
            type="number"
            id="outlined-required"
            label="Area"
            placeholder="Area"
          />
        </div>
      </Box>
      <Box className="px-2 mt-2">
        <TextField
          required
          multiline
          fullWidth
          id="outlined-multiline-flexible"
          label="Description"
          placeholder="Description"
          variant="outlined"
        />
      </Box>
      <Box className="px-2 mt-2 flex justify-end">
        <Button variant="contained">add</Button>
      </Box>
    </div>
  );
};

export default AddLand;
