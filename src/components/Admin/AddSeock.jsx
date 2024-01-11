import React from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
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
const AddStock = () => {
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
            Upload Stock Images
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
            label="Symbol"
            placeholder="Symbol"
          />
          <TextField
            required
            id="outlined-required"
            label="Sectore"
            placeholder="Sectore"
          />
          <TextField
            required
            id="outlined-required"
            label="current Price"
            placeholder="current Price"
          />
          <TextField
            required
            type="number"
            id="outlined-required"
            label="market Capitalization"
            placeholder="market Capitalization"
          />
          <TextField
            required
            type="number"
            id="outlined-required"
            label="divid end Yield"
            placeholder="divid end Yield"
          />
          <TextField
            required
            type="number"
            id="outlined-required"
            label="earnings Per Share"
            placeholder="earnings Per Share"
          />
          <TextField
            required
            type="date"
            id="outlined-required"
            label="date Founded"
          />
          <TextField
            required
            id="outlined-required"
            label="head quarters"
            placeholder="head quarters"
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

export default AddStock;
