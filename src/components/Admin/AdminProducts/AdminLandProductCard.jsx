import React from "react";
import Typography from "@mui/material/Typography";
import { IconButton, Paper, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";

import land2 from "../../../images/land2.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const AdminLandProductCard = () => {
  const theme = useTheme();
  return (
    <Paper className="rounded-md">
      <div>
        <Link to="/land/:id">
          <img
            className="w-full" // p-2
            src={land2}
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

export default AdminLandProductCard;
