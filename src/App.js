import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/Utility/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { DarktMode, LightMode } from "./components/Utility/AppMode";
import { useState } from "react";
import Footer from "./components/Utility/Footer";
import HousePage from "./pages/housePage/housePage";
import LandPage from "./pages/landPage/landPage";
import HouseDetailsContainer from "./components/House/HouseDetailsContainer";

function App() {
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
      <BrowserRouter>
        <NavBar setMode={setMode} />
        <div className=" mt-[56px] md:mt-[64px] xl:mt-[64px]">
          {/* <div> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/houses" element={<HousePage />} />
            <Route path="/house/:id" element={<HouseDetailsContainer />} />
            <Route path="/lands" element={<LandPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
