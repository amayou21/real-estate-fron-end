import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Grid from "@mui/material/Unstable_Grid2";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import land2 from "../../images/land2.jpg";
import { Button, IconButton, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BathtubIcon from "@mui/icons-material/Bathtub";
import KingBedIcon from "@mui/icons-material/KingBed";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

const images = [
  {
    original: land2,
    thumbnail: land2,
  },
  {
    original: land2,
    thumbnail: land2,
  },
  {
    original: land2,
    thumbnail: land2,
  },
];

const LandGallery = (onClick, onDisable) => {
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
    <div className="mt-5 rounded-md items-center">
      <Grid container>
        <Grid
          sm={12}
          xs={12}
          lg={4}
          md={4}
          className="flex justify-center items-center relative"
        >
          <div>
            <div className="p-3">land title</div>
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              isRTL={true}
              showPlayButton={false}
              showThumbnails={false}
              renderRightNav={customNextButton}
              renderLeftNav={customPrevButton}
            />
          </div>
        </Grid>

        <Grid sm={12} xs={12} lg={8} md={8}>
          <div className="py-4">
            <div className="flex justify-between w-[100%] py-2">
              <Typography variant="body1" color="inherit">
                <IconButton>
                  <LocationOnIcon />
                </IconButton>
                Location : land location
              </Typography>
              <Typography
                variant="p"
                color="inherit"
                className="rounded outline outline-offset-2 outline-blue-500 mb-3 p-2"
              >
                land status
              </Typography>
            </div>

            <p className="px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              illum tempore repudiandae eligendi excepturi voluptas nemo
              doloremque, expedita nesciunt. Praesentium sequi autem maxime
              delectus expedita officiis in molestias earum non.
            </p>
            <div className="flex items-center justify-between xl:w-[50%] md:w-[50%] my-2 px-4 w-[100%]">
              <p>Area : 90/90</p>
            </div>

            <div className="my-4 flex justify-between items-center">
                  <p  className="px-4">2000$</p>
                <Button variant="contained" color="success">
                  add to cart
                </Button>
            </div>
            <div className="my-2  mx-4 xl:px-4 md:px-3 flex justify-between items-center">
              <div>
                {" "}
                <CalendarMonthRoundedIcon fontSize="small" />
                <Typography fontSize="small" variant="p" color="inherit">
                  Posted at : 22/1/2024
                </Typography>
              </div>

              <span className="text-yellow-500 my-2 flex items-center ">
                <StarBorderRoundedIcon /> <p>5.3</p>
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default LandGallery;