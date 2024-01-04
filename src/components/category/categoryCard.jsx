import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import img1 from "../../images/img1.jpg";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import ReadMoreSharpIcon from "@mui/icons-material/ReadMoreSharp";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
const CategoryCard = ({ title }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <img
        src={img1}
        style={{ width: "100%", height: "80%" }}
        alt="Your Image"
      />
      <p className="ml-2 mr-2">{title}</p>

      <KeyboardTabIcon
        className={
          theme.palette.mode === "dark" ? "text-red-300" : "text-sky-500"
        }
      />
    </Paper>
  );
};

export default CategoryCard;
