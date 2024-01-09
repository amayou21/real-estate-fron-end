import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeLocation from "../Utility/homeLocation";

const OrderHeader = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Home" value="1" />
          <Tab label="Land" value="2" />
          <Tab label="Stocks" value="3" />
        </TabList>
      </Box>
      <TabPanel  value="1"><HomeLocation/></TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
    </TabContext>
  );
};
export default OrderHeader;
