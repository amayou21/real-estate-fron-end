import { Container } from "@mui/material";
import React from "react";
import stock from "../../images/stock.jpg"
import stock1 from "../../images/stock1.jpg";
import stock2 from "../../images/stock2.jpg";

import Subtitle from "../Utility/Subtitle";
import SubCard from "../Utility/SubCard";
import SubcategoryInfoCard from "../Utility/SubcategoryInfoCard";

const SubStockCardContainer = () => {
  return (
    <Container className="mt-7 mb-7">
      <Subtitle title="Stocks" btntitle="show more" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
        <SubCard title="Buy a stock" btntitle="Browse stock" image={stock1} />
        <SubCard title="Sell a stock" btntitle="see your options" image={stock2} />
        <SubcategoryInfoCard image={stock}/>
      </div>
    </Container>
  );
};

export default SubStockCardContainer;
