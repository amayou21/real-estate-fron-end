// import { Box, Container, Grid } from "@mui/material";
// import Checkout from "./Checkout";
// // import OrderProduct from "./OrderProduct";
// import React, { useEffect, useState } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import { TabContext, TabList, TabPanel } from "@mui/lab";
// import LandOrders from "./Land/LandOrders";
// import StockOrder from "./Stock/StockOrder";
// import HomeOrders from "./Home/HomeOrders";

// const OrderContainerPage = () => {
//   const [value, setValue] = useState("1");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     console.log(value);
//   };
//   return (
//     <TabContext value={value}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider", padding: 0 }}>
//         <TabList onChange={handleChange} aria-label="lab API tabs example">
//           <Tab label="Home" value="1" />
//           <Tab label="Land" value="2" />
//           <Tab label="Stocks" value="3" />
//         </TabList>
//       </Box>

//       <TabPanel value="1">
//         <HomeOrders />
//       </TabPanel>

//       <TabPanel value="2">
//         <LandOrders />
//       </TabPanel>

//       <TabPanel value="3">
//         <StockOrder />
//       </TabPanel>
//     </TabContext>
//   );
// };

// export default OrderContainerPage;
