import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Paper, Rating, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";

import BathtubIcon from "@mui/icons-material/Bathtub";
import KingBedIcon from "@mui/icons-material/KingBed";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import img5House from "../../../images/img5House.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const AdminHomeProductCard = () => {
  const theme = useTheme();
  return (
    <Paper className="rounded-md">
      <div>
        <Link to="/house/:id">
          <img
            className="w-full" // p-2
            src={img5House}
            alt="desc"
          />
        </Link>
        <Typography variant="body2" color="text.secondary" className="p-2">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </div>

      <div className="px-2 flex items-center">
        Reting Averig : <b className="text-yellow-500 px-2">8.5</b>{" "}
      </div>

      <div>
        <IconButton className="flex items-center">
          <b>3</b>
          <BathtubIcon />
        </IconButton>
        |
        <IconButton className="flex items-center">
          <b>5</b>
          <KingBedIcon />
        </IconButton>
        |
        <IconButton className="flex items-center">
          <b>1</b>
          <DriveEtaIcon />
        </IconButton>
      </div>

      <div
        className={`flex justify-between items-center ${
          theme.palette.mode === "dark" ? "bg-amber-500" : "bg-amber-400"
        }`}
      >
        <IconButton>
          <ShareIcon />
        </IconButton>

        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>

        <Typography variant="h6" color="inherit" className="p-2">
          250 $
        </Typography>
      </div>
    </Paper>
  );
};

export default AdminHomeProductCard;
