import React from "react";
import StockOrder from "../Stock/StockOrders";
import LandOrderCard from "./LandOrderCard";
import Checkout from "../../Utility/Checkout";

const LandOrders = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col xl:flex-row justify-between">
      <div>
        <LandOrderCard />
        <LandOrderCard />
        <LandOrderCard />
        <LandOrderCard />
        <LandOrderCard />
      </div>
      <Checkout />
    </div>
  );
};

export default LandOrders;
