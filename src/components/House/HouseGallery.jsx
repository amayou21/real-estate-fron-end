import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Grid from "@mui/material/Unstable_Grid2";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import img5House from "../../images/img5House.jpg";
import { Button, IconButton, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BathtubIcon from "@mui/icons-material/Bathtub";
import KingBedIcon from "@mui/icons-material/KingBed";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

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

const HouseGallery = (onClick, onDisable) => {
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
            <div className="p-3">house title</div>
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
                Location : home location
              </Typography>
              <Typography
                variant="p"
                color="inherit"
                className="rounded outline outline-offset-2 outline-blue-500 mb-3 p-2"
              >
                home status
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
                <Button color="inherit" sx={{ bgcolor: "info" }}>
                  200$
                </Button>
                <Button variant="contained" color="success">
                  add to cart
                </Button>
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
export default HouseGallery;