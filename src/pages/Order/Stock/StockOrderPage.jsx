import React from "react";
import StockOrders from "../../../components/Order/Stock/StockOrders";
import PaginatePage from "../../../components/Utility/PaginatePage";

const StockOrderPage = () => {
  return (
    <div>
      <StockOrders />
      <PaginatePage />
    </div>
  );
};

export default StockOrderPage;
