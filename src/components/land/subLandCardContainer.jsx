import { Container } from "@mui/material";
import React from "react";
import land from "../../images/land.jpg";
import land2 from "../../images/land2.jpg";
import land3 from "../../images/land3.jpg";

import Subtitle from "../Utility/Subtitle";
import SubCard from "../Utility/SubCard";
import SubcategoryInfoCard from "../Utility/SubcategoryInfoCard";

const SubLandCardContainer = () => {
  return (
    <Container className="mt-7 mb-7">
      <Subtitle title="Lands" btntitle="show more" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
        <SubcategoryInfoCard image={land}/>
        <SubCard title="Buy a land" btntitle="Browse land" image={land2} />
        <SubCard title="Sell a land" btntitle="see your options" image={land3} />
      </div>
    </Container>
  );
};

export default SubLandCardContainer;
