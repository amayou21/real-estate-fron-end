import { Container } from "@mui/material";
import React from "react";
import HouseGallery from "./HouseGallery";
import ProductReting from "../Utility/ProductReting";
import HomeLocation from "../Utility/homeLocation";
const HouseDetailsContainer = () => {
  return (
    <Container>
      <HouseGallery />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <HomeLocation title='Home' />
        <ProductReting />
      </div>
    </Container>
  );
};

export default HouseDetailsContainer;
