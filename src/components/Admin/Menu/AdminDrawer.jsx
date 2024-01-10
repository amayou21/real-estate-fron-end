import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DarktMode, LightMode } from "../../Utility/AppMode";

// prod management
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

// order management
import { ShoppingCart } from "@mui/icons-material";

// add Home
import AddHomeIcon from "@mui/icons-material/AddHome";
// add category
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// add stock
import ShowChartIcon from "@mui/icons-material/ShowChart";
//  add land
import LandscapeIcon from "@mui/icons-material/Landscape";

const drawerWidth = 240;
const data = [
  {
    name: "Order Management",
    icon: <ShoppingCart fontSize="small" />,
    link: "/order-management",
  },
  {
    name: "Products Management",
    icon: <ManageAccountsIcon fontSize="small" />,
    link: "/products-management",
  },
  {
    name: "Add Home",
    icon: <AddHomeIcon fontSize="small" />,
    link: "/add-brand",
  },
  {
    name: "Add Category",
    icon: <AddCircleOutlineIcon fontSize="small" />,
    link: "/add-category",
  },
  {
    name: "Add Land",
    icon: <LandscapeIcon fontSize="small" />,
    link: "/add-sub-category",
  },
  {
    name: "Add Stock",
    icon: <ShowChartIcon fontSize="small" />,
    link: "/add-product",
  },
];

const AdminDrawer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 1,
          display: { xs: "none", md: "flex" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <p>  Reale Estate</p> */}
        {/* <Toolbar /> */}
        {/* <Divider /> */}
        <div className="w-[100%] h-[100%] mt-[56px] md:mt-[63px] xl:mt-[56px] p-1">
          <List>
            {data.map((val, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/admin${val.link}`);
                  }}
                >
                  <div className="mr-2">{val.icon}</div>
                  <Typography variant="p" component="p" color="inherit">
                    {val.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default AdminDrawer;
