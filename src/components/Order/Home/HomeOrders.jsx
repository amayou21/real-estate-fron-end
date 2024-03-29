import React from "react";
import HomeOrderCard from "./HomeOrderCard";
import Checkout from "../../Utility/Checkout";

const HomeOrders = () => {
  return (
    <div className="flex p-2 flex-col sm:flex-col md:flex-col xl:flex-row justify-between">
      <div>
        <HomeOrderCard />
        <HomeOrderCard />
        <HomeOrderCard />
        <HomeOrderCard />
        <HomeOrderCard />
        <HomeOrderCard />
      </div>
      <Checkout />
    </div>
  );
};

export default HomeOrders;
