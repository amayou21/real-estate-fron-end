import React from "react";
import { Avatar, Container, Grid, IconButton, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import UnstyledTextareaAutosize from "./textArea";
import OtherClientRating from "./OtherClientRating";
import img4 from "../../images/img4.jpg"
const ProductReting = () => {
  return (
    <Grid item sm={12} xs={12} lg={12} md={12} className="flex items-end">
      <Container className="mt-6">
        <div className="flex  ">
          <Rating name="size-large" defaultValue={2} size="larg" max={1} />

          <Typography variant="p" color="inherit">
            Rating : 120
          </Typography>
        </div>

        <div className="flex items-center m-2 ">
          <Typography variant="h5" color="inherit">
            <IconButton>
              <Avatar src={img4}/>
            </IconButton>
            Current User Name
          </Typography>
          <Stack spacing={1} className="ml-3">
            <Rating name="size-large" defaultValue={2} size="large" />
          </Stack>
        </div>
        <UnstyledTextareaAutosize />
        <p className="py-3">Comments</p>

        <OtherClientRating />
        <OtherClientRating />
        <OtherClientRating />
      </Container>
    </Grid>
  );
};
export default ProductReting;
