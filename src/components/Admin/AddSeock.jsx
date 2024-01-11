import React from "react";
import { Box, Button, IconButton, MenuItem, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

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
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <>
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="customized-dialog-title">
            Create Category
          </DialogTitle>
          <div component="form" className="px-20">
            <TextField
              required
              id="outlined-required"
              label="Name"
              placeholder="Name"
            />
          </div>

          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleClose} autoFocus>
              Crate
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

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
              id="outlined-select-currency"
              select
              label="Category"
              placeholder="Select Category"
              defaultValue="Big House"
            >
              <MenuItem value="big-bouse">Big House</MenuItem>
              <MenuItem value="home">Home</MenuItem>
              <MenuItem onClick={handleClickOpen}>
                <div className="flex justify-between w-[100%]">
                  Create Category <AddIcon />
                </div>
              </MenuItem>
            </TextField>

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
    </>
  );
};

export default AddStock;
