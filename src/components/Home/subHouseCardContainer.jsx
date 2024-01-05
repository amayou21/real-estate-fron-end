import { Container } from "@mui/material";
import React from "react";
import rentHome from "../../images/rentHome.jpg";
import img4 from "../../images/img4.jpg";
import img5House from "../../images/img5House.jpg";

import Subtitle from "../Utility/Subtitle";
import SubCard from "../Utility/SubCard";

const SubHouseCardContainer = () => {
  return (
    <Container className="mt-7 mb-7">
      <Subtitle title="Homes" btntitle="show more" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
        <SubCard
          title="Buy a home"
          btntitle="Browse home"
          image={rentHome}
          pathText="/houses"
        />
        <SubCard title="Rent a home" btntitle="find rentals" image={img4} />
        <SubCard
          title="Sell a home"
          btntitle="see your options"
          image={img5House}
        />
      </div>
    </Container>
  );
};

export default SubHouseCardContainer;
