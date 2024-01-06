import React from "react";
import HouseCard from "./houseCard";
import { Container } from "@mui/material";
import FilterBar from "../Utility/filterBar";

const HouseCardContainer = () => {
  return (
    <Container className="mt-8 ">
      <div className="my-4">
      <FilterBar />

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-3 my-4 ">
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
