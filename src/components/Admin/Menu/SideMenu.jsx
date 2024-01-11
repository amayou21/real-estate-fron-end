import React from "react";
import { AppBar } from "@mui/material";
import AdminNavBar from "../../Utility/AdminNavBar";
import AdminDrawer from "./AdminDrawer";
const SideMenu = ({ setMode }) => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <AdminNavBar setMode={setMode} />
      </AppBar>
      <AdminDrawer />
    </div>
  );
};
export default SideMenu;
