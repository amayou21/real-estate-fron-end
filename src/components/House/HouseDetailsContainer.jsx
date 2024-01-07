import { Container } from "@mui/material";
import React from "react";
import HouseGallery from "./HouseGallery";
import ProductReting from "./ProductReting";
import HomeLocation from "./homeLocation";

const HouseDetailsContainer = () => {
  return (
    <Container>
      <HouseGallery />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <HomeLocation />
        <ProductReting />
      </div>
    </Container>
  );
};

export default HouseDetailsContainer;
