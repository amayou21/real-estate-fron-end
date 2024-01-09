import { Box, Container, Grid } from "@mui/material";
// import Checkout from "./Checkout";
// import OrderProduct from "./OrderProduct";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeOrderPage from "./Home/HomeOrderPage";
import LandOrderPage from "./Land/LandOrderPage";
import StockOrderPage from "./Stock/StockOrderPage";

const OrdersPage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", padding: 0 }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Home" value="1" />
          <Tab label="Land" value="2" />
          <Tab label="Stocks" value="3" />
        </TabList>
      </Box>

      <TabPanel value="1">
        <HomeOrderPage />
      </TabPanel>

      <TabPanel value="2">
        <LandOrderPage />
      </TabPanel>

      <TabPanel value="3">
        <StockOrderPage />
      </TabPanel>
    </TabContext>
  );
};

export default OrdersPage;
