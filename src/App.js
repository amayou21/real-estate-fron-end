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
import AdminDashPage from "./pages/Admin/AdminDashPage";
import Dashboard from "./components/Admin/Dashboard";
import OrderManagementPage from "./pages/Admin/OrderManagementPage";
import ProductManagementPage from "./pages/Admin/ProductManagementPage";
import AddHomePage from "./pages/Admin/AddHomePage";
import AddCategoryPage from "./pages/Admin/AddCategoryPage";
import AddLandPage from "./pages/Admin/AddLandPage";
import AddSeockPage from "./pages/Admin/AddStockPage";
import AllCategoryPage from "./pages/AllCategoryPage/AllCategoryPage";

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

  // Check the pathname and conditionally render the NavBar
  const showNavBar = !window.location.pathname.startsWith('/admin');

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        {showNavBar ? <NavBar setMode={setMode} /> : null}

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
            <Route path="/more-category" element={<AllCategoryPage />} />
            
            {/* User auth */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/admin" element={<AdminDashPage setMode={setMode} />}>
              <Route index element={<Dashboard />} />
              <Route path="order-management" element={<OrderManagementPage />} />
              <Route path="products-management" element={<ProductManagementPage />} />
              <Route path="add-home" element={<AddHomePage />} />
              <Route path="add-category" element={<AddCategoryPage />} />

              <Route path="add-land" element={<AddLandPage />} />
              <Route path="add-stock" element={<AddSeockPage />} />

            </Route>


          </Routes>
        </div>
        {showNavBar ? <Footer /> : null}

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
