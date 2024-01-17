import React, { useEffect, useState } from 'react';
import { createCategory } from "../../Redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import UseNotification from "../../hook/UseNotification";
const AddCategoryHook = () => {

    const dispatch = useDispatch();

    // @desc get resultes
    const res = useSelector((val) => val.allCategory.category);

    // @desc states
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState();
    const [selectingImage, setSelectingImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // @desc closing funsction
    const handleClose = () => {
        setOpen(false);
    };

    // @desc check image format
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


    // @desc handle submiting values
    const handleSubmit = async (e) => {

        // @desc  stop reloading page
        e.preventDefault();

        // @desc user inputs checking
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
        }
    };

    useEffect(() => {
        if (!loading) {
            setOpen(false);
            setImage(image);
            setName(name);
            if (res) {
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
    }, [loading]);


    return [
        onImageChange,
        image,
        name,
        setName,
        handleSubmit,
        open,
        handleClose,
    ]
}

export default AddCategoryHook;
