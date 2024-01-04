import { Button, Paper } from "@mui/material";
import React from "react";
import rentHome from "../../images/rentHome.jpg";
import Subtitle from "./Subtitle";
import ReadMoreSharpIcon from "@mui/icons-material/ReadMoreSharp";
import ShareIcon from "@mui/icons-material/Share";

import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
const SubCard = ({ title, image, btntitle, pathText }) => {
  const theme = useTheme();
  return (
    <Paper
      className="relative"
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <ShareIcon className="absolute top-2 right-2 text-rose-800" />
      <div className="h-[50%] w-[100%]">
        <img
          src={image}
          style={{ width: "100%", height: "100%" }}
          alt="Your Image"
        />
      </div>
      <div className="flex justify-center w-[100%]">
        <p>
          <b> {title}</b>
        </p>
      </div>

      <p className="flex text-center w-[100%]">
        Find your place with an immersive photo experience and the most
        listings, including things you won’t find anywhere else.
      </p>
      <Link to={`${pathText}`} className="w-[100%] ">
        <div className="flex justify-center w-[100%]">
          <Button
            // href=
            className={`${theme.palette.btnBgColor}`}
            variant={`${theme.palette.btnVariant}`}
            color={theme.palette.mode === "dark" ? "secondary" : "primary"}
            endIcon={
              <ReadMoreSharpIcon
                className={
                  theme.palette.mode === "dark" ? "text-red-300" : "text-white"
                }
              />
            }
          >
            {btntitle}
          </Button>
        </div>
      </Link>
      {/* </div> */}
    </Paper>
  );
};

export default SubCard;
