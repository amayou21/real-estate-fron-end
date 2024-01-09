import React from "react";
import img5House from "../../../images/img5House.jpg";
import { Grid, IconButton, Paper } from "@mui/material";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BathtubIcon from "@mui/icons-material/Bathtub";
import KingBedIcon from "@mui/icons-material/KingBed";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import { Link } from "react-router-dom";

const images = [
  {
    original: img5House,
    thumbnail: img5House,
  },
  {
    original: img5House,
    thumbnail: img5House,
  },
  {
    original: img5House,
    thumbnail: img5House,
  },
];

const HomeOrderCard = () => {
  const customPrevButton = (onClick, onDisable) => (
    <div className="absolute h-[100%] z-10 left-1 flex items-center">
      <IconButton onClick={onClick} onDisable={onDisable}>
        <SkipPreviousOutlinedIcon sx={{ fontSize: 40, color: "#ff3d00" }} />
      </IconButton>
    </div>
  );

  const customNextButton = (onClick, onDisable) => (
    <div className="absolute h-[100%] z-10 right-1 flex items-center">
      <IconButton onClick={onClick} onDisable={onDisable}>
        <SkipNextOutlinedIcon sx={{ fontSize: 40, color: "#ff3d00" }} />
      </IconButton>
    </div>
  );

  return (
    <Paper className="xl:mx-2 md:mx-2">
      <Grid container className="mb-2">
        <Grid item sm={12} xs={12} lg={3} md={4} className="flex items-center justify-center"
        >
          <div>
            <p className="flex justify-center py-2">Home Title</p>
            <ReactImageGallery
              items={images}
              showFullscreenButton={false}
              isRTL={true}
              showPlayButton={false}
              showThumbnails={false}
              renderRightNav={customNextButton}
              renderLeftNav={customPrevButton}
            />
            <Typography
              fontSize="small"
              variant="p"
              color="inherit"
              className="p-4"
            >
              Posted at : 22/1/2024
            </Typography>
          </div>
        </Grid>

        <Grid item sm={12} xs={12} lg={9} md={8}>
          <div className="flex justify-between items-center ">
            <Typography variant="body1" color="inherit">
              <IconButton>
                <LocationOnIcon />
              </IconButton> Home location
            </Typography>

            <Typography variant="p" color="inherit" className=" p-2">
              Home status
            </Typography>
          </div>

          <div className="px-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              illum tempore repudiandae eligendi excepturi voluptas nemo
              doloremque, expedita nesciunt. Praesentium sequi autem maxime
              delectus expedita officiis in molestias earum non.
            </p>

            <p className="mt-2">Area : 90/90</p>
            <div className="my-4 flex justify-between items-center">
              200$
              <Button variant="contained" color="success">
                add to cart
              </Button>
            </div>
          </div>

          <div className="xl:w-[50%] md:w-[50%] my-2 w-[100%] flex justify-around items-center">
            <div className="flex items-center">
              <b>3</b>
              <BathtubIcon />
            </div>
            |
            <div className="flex items-center">
              <b>5</b>
              <KingBedIcon />
            </div>
            |
            <div className="flex items-center">
              <b>1</b>
              <DriveEtaIcon />
            </div>
          </div>
          <Link to="/house/:id" className="flex justify-end px-4 py-2">
            <p  className="text-blue-700">deatails</p>
            <KeyboardTabIcon    className="text-blue-700"/>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomeOrderCard;
