import React from "react";
import LandGallery from "./LandGallery";
import { Container } from "@mui/material";
import ProductReting from "../Utility/ProductReting";
import HomeLocation from "../Utility/homeLocation";
const LandDetailsContainer = () => {
  return (
    <Container>
      <LandGallery />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <HomeLocation title="Land" />
        <ProductReting />
      </div>
    </Container>
  );
};

export default LandDetailsContainer;
