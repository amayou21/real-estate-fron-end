import React, { useState } from "react";
import { AppBar, CssBaseline, createTheme } from "@mui/material";
import { DarktMode, LightMode } from "../../Utility/AppMode";
import { ThemeProvider } from "@emotion/react";
import AdminNavBar from "../../Utility/AdminNavBar";
import AdminDrawer from "./AdminDrawer";


const SideMenu = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("currentTheme") === null
      ? "light"
      : localStorage.getItem("currentTheme") === "light"
      ? "light"
      : "dark"
  );

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light" ? LightMode : DarktMode),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <AdminNavBar setMode={setMode} />
      </AppBar>
      <AdminDrawer />
    </ThemeProvider>
  );
};
export default SideMenu;
