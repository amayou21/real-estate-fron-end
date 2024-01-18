import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { createCategory } from "../../Redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import UseNotification from "../../hook/UseNotification";

const AddCategory = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [selectingImage, setSelectingImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const onImageChange = (event) => {
    if (
      event.target.files &&
      event.target.files[0] &&
      event.target.files[0].type.split("/")[0] === "image"
    ) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectingImage(event.target.files[0]);
    } else {
      UseNotification("Accept just image format", "warning");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      UseNotification("you're Offline", "error");
      return;
    }
    if (!name || !image) {
      setLoading(false);
      UseNotification("category name and image are required", "warning");
    } else if (name && image) {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", selectingImage);
      await dispatch(createCategory(formData));
      setLoading(false);
      setCheck(true);
    }
  };

  const res = useSelector((val) => val.allCategory.category);

  useEffect(() => {
    if (!loading) {
      setOpen(false);
      setImage("");
      setName("");
      if (res && check) {
        if (res.status) {
          if (res.status === 201) {
            setLoading(false);

            UseNotification("created successfuly!", "success");
          } else {
            // console.log(res.data.errors[0].msg);
            setLoading(false);
            UseNotification(res.data.errors[0].msg, "error");
          }
        }
      }
    } else {
      setOpen(true);
    }
    setCheck(false);
  }, [loading]);

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
            Upload Category Images
          </Typography>
          <IconButton
            component="label"
            variant="contained"
            onChange={onImageChange}
            sx={{
              "&:hover": {
                backgroundColor: "transparent", // Set the background color to transparent on hover
              },
            }}
          >
            {!image ? (
              <CloudUploadIcon sx={{ fontSize: "80px" }} />
            ) : (
              <img width="150px" height="150px" src={image} alt="image" />
            )}
            <input
              type="file"
              style={{ display: "none" }}
              onChange={onImageChange}
            />
          </IconButton>
        </div>
        <TextField
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          // type="text"
          required
          multiline
          fullWidth
          id="outlined-multiline-flexible"
          label="Name"
          placeholder="Name"
          variant="outlined"
        />
      </Box>
      <Box className="px-2 mt-2 flex justify-end" onClick={handleSubmit}>
        <Button variant="contained">create</Button>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ToastContainer />
    </div>
  );
};

export default AddCategory;
