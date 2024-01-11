import { Badge, Box } from "@mui/material";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import AdminHomeProductsPage from "../../components/Admin/AdminProducts/AdminHomeProductsPage ";
import AdminStockProductsPage from "../../components/Admin/AdminProducts/AdminStockProductsPage";
import AdminLandProductsPage from "../../components/Admin/AdminProducts/AdminLandProductsPage";

const ProductManagementPage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
  return (
    <TabContext value={value} sx={{padding:"0px"}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Home" value="1" />
          <Tab label="Land" value="2" />
          <Tab label="Stocks" value="3" />
        </TabList>
        <TabPanel value="1"  sx={{padding:0 }}>
          <AdminHomeProductsPage />
        </TabPanel>

        <TabPanel value="2" sx={{padding:0 }}>
          <AdminLandProductsPage />
        </TabPanel>

        <TabPanel value="3"  sx={{padding:0 }}>
          <AdminStockProductsPage />
        </TabPanel>
      </Box>
    </TabContext>
  );
};

export default ProductManagementPage;
