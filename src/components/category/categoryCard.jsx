import * as React from "react";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const CategoryCard = ({ title, image }) => {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ maxHeight: 120 }}
          component="img"
          height="80px"
          image={image}
          alt="green iguana"
        />
        <CardContent className="flex">
          <Typography gutterBottom variant="p" component="div" className="pr-2">
            {title}
          </Typography>
          <KeyboardTabIcon
            className={
              theme.palette.mode === "dark" ? "text-red-300" : "text-sky-500"
            }
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
