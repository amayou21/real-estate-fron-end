import { Paper } from "@mui/material";
import React from "react";

const SubcategoryInfoCard = ({ image, title }) => {
  return (
    <Paper
      className="relative"
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <img
        src={image}
        style={{ width: "100%", height: "100%" }}
        alt="Your Image"
      />
      <div className="w-[100%] flex absolute bottom-3 left-3">
        <b>
          <i className="text-white">Looking for a lands?</i>
        </b>
      </div>
      <div className="w-[100%] flex absolute top-7 p-3 text-black">
        <p className="break-words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          minus iste consequuntur quidem asperiores accusamus eos quam
          blanditiis nesciunt nostrum temporibus, reiciendis provident, modi
          dolore minima. Odit perferendis nam minima.
        </p>
      </div>
    </Paper>
  );
};

export default SubcategoryInfoCard;
