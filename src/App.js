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
import LandDetailsContainer from "./components/land/LandDetailsContainer";
import Favorites from "./components/Utility/Favorites";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import OrdersPage from "./pages/Order/OrdersPage";

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
            <Route path="/land/:id" element={<LandDetailsContainer />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/order" element={<OrdersPage />} />

            {/* User auth */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />


          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
