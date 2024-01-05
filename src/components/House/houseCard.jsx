import React, { useState } from "react";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Paper, Rating, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

import img2 from "../../images/img2.jpeg";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const getLabelText = (value) => {
  return labels[value];
};
const HouseCard = () => {
  const theme = useTheme();
  const [value, setValue] = useState(2.5);
  const [hover, setHover] = useState(-1);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };
  return (
    <Paper className="rounded-md">
      {/*  */}
      <div>
        {/* <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite color="error" />}
        /> */}

        <Link to="/product/:id">
          <img
            className="w-full" // p-2
            src={img2}
            alt="desc"
          />
        </Link>
        <Typography variant="body2" color="text.secondary" className="p-2">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </div>

      {/* <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={
          <StarIcon style={{ opacity: 0.55 }} fontSize="text-slate-700" />
        }
      /> */}

      <div className="flex justify-between">
        {value !== null && (
          <Box className="text-lime-500" sx={{ ml: 1 }}>
            {labels[hover !== -1 ? hover : value]}
          </Box>
        )}
        <Typography variant="h6" color="inherit" className="p-2">
          250 $
        </Typography>
      </div>
    </Paper>
  );
};

export default HouseCard;
