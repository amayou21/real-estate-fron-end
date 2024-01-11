import { Badge, Box } from "@mui/material";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import AdminHomeOrdersPage from "../../components/Admin/AdminOrders/AdminHomeOrdersPage ";
import AdminLandOrdersPage from "../../components/Admin/AdminOrders/AdminLandOrdersPage";
import AdminStockOrdersPage from "../../components/Admin/AdminOrders/AdminStockOrdersPage";

const OrderManagementPage = () => {
  const [value, setValue] = useState("1");

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
        <TabPanel value="1"  sx={{padding:0 }}>
        <AdminHomeOrdersPage />
      </TabPanel>

      <TabPanel value="2"  sx={{padding:0 }}>
        <AdminLandOrdersPage />
      </TabPanel>

      <TabPanel value="3"  sx={{padding:0 }}>
        <AdminStockOrdersPage />{" "}
      </TabPanel>
      </Box>

     
    </TabContext>
  );
};

export default OrderManagementPage;
