import React, { useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { AllCategory } from "../../Redux/actions/categoryAction";
import AddCategory from "./AddCategory";
import { useDispatch, useSelector } from "react-redux";
import CancelIcon from "@mui/icons-material/Cancel";

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
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const res = useSelector((val) => val.allCategory.category);
  const categories = res.data ? res.data.data : [];
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(AllCategory());
  }, [open]);

  return (
    <>
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="px-20 py-5 relative">
            <AddCategory />
            <div className="absolute top-0 right-0">
              <IconButton onClick={handleClose}>
                <CancelIcon color="error" />
              </IconButton>
            </div>
          </div>
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
            <TextField required id="title" label="Title" placeholder="Title" />

            <TextField
              required
              id="statuse"
              label="Statuse"
              placeholder="statuse"
            />

            <TextField
              required
              id="category"
              select
              label="Category"
              placeholder="Select Category"
              defaultValue="select"
            >
              <MenuItem value="select">
                <p className="py-3"></p>
              </MenuItem>
              {categories
                ? categories.length > 0
                  ? categories.reverse().map((val, index) => {
                      return (
                        <MenuItem
                          key={val._id}
                          value={val._id}
                          className={`${
                            index === 0 ? "text-emerald-400" : null
                          }`}
                        >
                          {val.name}
                        </MenuItem>
                      );
                    })
                  : null
                : null}
              <MenuItem onClick={handleClickOpen}>
                <div className="flex justify-between w-[100%]">
                  <Typography variant="p" color="primary">
                    Create Category
                  </Typography>
                  <AddIcon color="primary" />
                </div>
              </MenuItem>
            </TextField>

            <TextField
              required
              type="number"
              id="price"
              label="price"
              placeholder="Price"
            />

            <TextField
              required
              id="symbol"
              label="symbol"
              placeholder="Symbol"
            />

            <TextField
              required
              id="sectore"
              label="Sectore"
              placeholder="Sectore"
            />

            <TextField
              required
              id="current-price"
              label="current Price"
              placeholder="current Price"
            />

            <TextField
              required
              type="number"
              id="market-capitalization"
              label="market Capitalization"
              placeholder="market Capitalization"
            />

            <TextField
              required
              type="number"
              id="divid-end-yield"
              label="divid end Yield"
              placeholder="divid end Yield"
            />

            <TextField
              required
              type="number"
              id="earnings-per-share"
              label="earnings Per Share"
              placeholder="earnings Per Share"
            />

            <TextField
              required
              type="date"
              id="date-Founded"
              label="date Founded"
            />

            <TextField
              required
              id="head-uarters"
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
            id="Description"
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
