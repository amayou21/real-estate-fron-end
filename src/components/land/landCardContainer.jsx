import { Container } from "@mui/material";
import React from "react";
import LandCard from "./landCard";

const LandCardContainer = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-4">
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
