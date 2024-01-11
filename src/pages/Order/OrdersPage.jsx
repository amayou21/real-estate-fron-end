import { Box} from "@mui/material";
import React, {  useState } from "react";
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

      <TabPanel value="1" sx={{padding:0 }}>
        <HomeOrderPage />
      </TabPanel>

      <TabPanel value="2" sx={{padding:0 }}>
        <LandOrderPage />
      </TabPanel>

      <TabPanel value="3" sx={{padding:0 }}> 
        <StockOrderPage />
      </TabPanel>
    </TabContext>
  );
};

export default OrdersPage;
