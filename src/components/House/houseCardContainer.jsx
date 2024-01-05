import React from "react";
import HouseCard from "./houseCard";
import { Container } from "@mui/material";
import Subtitle from "../Utility/Subtitle";

const HouseCardContainer = () => {
  return (
    <Container className="mt-8">
      <Subtitle title=" " btntitle=""/>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-3 ">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </Container>
  );
};

export default HouseCardContainer;
