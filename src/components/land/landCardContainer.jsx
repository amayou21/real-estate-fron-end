import { Container } from "@mui/material";
import React from "react";
import LandCard from "./landCard";
import FilterBar from "../Utility/filterBar";

const LandCardContainer = () => {
  return (
    <Container>
      <FilterBar  ProductType="land"/>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-4 my-3">
        <LandCard />
        <LandCard />
        <LandCard />
        <LandCard />
        <LandCard />
        <LandCard />
        <LandCard />
        <LandCard />
      </div>
    </Container>
  );
};

export default LandCardContainer;
