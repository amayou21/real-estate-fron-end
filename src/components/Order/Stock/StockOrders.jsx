import React from "react";
import StockOrderCard from "./StockOrderCard";
import Checkout from "../../Utility/Checkout";

const StockOrders = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col xl:flex-row justify-between">
      <div>
        <StockOrderCard />
        <StockOrderCard />
        <StockOrderCard />
        <StockOrderCard />
        <StockOrderCard />
      </div>
      <Checkout />
    </div>
  );
};

export default StockOrders;
