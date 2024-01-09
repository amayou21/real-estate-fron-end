import { Container } from "@mui/material";
import React from "react";
import HouseCard from "../House/houseCard";
import PaginatePage from "./PaginatePage";

const Favorites = () => {
  return (
    <Container>
      <p className="p-3">Favorites</p>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
      <PaginatePage />
    </Container>
  );
};

export default Favorites;
