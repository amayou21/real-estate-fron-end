import React from 'react';

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AddCategoryHook from '../category/add-category-hook';

const AddHomeHook = () => {

    const [onImageChange, image, name, setName, handleSubmit, categoryOpen, categoryHandleClose] =
        AddCategoryHook();

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return [open, setOpen, fullScreen, handleClickOpen, handleClose, onImageChange, image, name, setName, handleSubmit, categoryOpen, categoryHandleClose]
}

export default AddHomeHook;
