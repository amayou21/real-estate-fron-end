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
      //   className="rounded-3xl"
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {/* <Paper className="rounded-3xl"> */}
      <img
        // className="r"
        src={img1}
        style={{ width: "100%", height: "80%" }}
        alt="Your Image"
      />
      {/* </Paper> */}
      <p className="ml-2 mr-2">{title}</p>
      {/* <Button
        // href=
        className={`${theme.palette.btnBgColor}`}
        variant={`${theme.palette.btnVariant}`}
        color={theme.palette.mode === "dark" ? "secondary" : "primary"}
        endIcon={ */}
      <KeyboardTabIcon
        className={
          theme.palette.mode === "dark" ? "text-red-300" : "text-sky-500"
        }
      />
      {/* }
      >
        {title}
      </Button> */}
    </Paper>
  );
};

export default CategoryCard;
