import * as React from "react";
import { Brightness4, Brightness7, ShoppingCart } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@emotion/react";
import { Button, Link, MenuList } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// rent
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
// sell
import SellIcon from "@mui/icons-material/Sell";

// Buy
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBar = ({ setMode }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorPurchase, setAnchorPurchase] = React.useState(null);
  const [anchorSell, setAnchorSell] = React.useState(null);
  const [anchorRent, setAnchorRent] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isPurchaseOpen = Boolean(anchorPurchase);
  const isSellOpen = Boolean(anchorSell);
  const isRentOpen = Boolean(anchorRent);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const menuId = "primary-search-account-menu";
  const purshaseId = "primary-search-purshase-menu";
  const sellId = "primary-search-sell-menu";
  const rentId = "primary-search-rent-menu";

  //@desc profile menu open
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //@desc profile menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  //@desc purshase menu open
  const handlePurchaseMenuOpen = (event) => {
    setAnchorPurchase(event.currentTarget);
  };

  //@desc purchase menu close
  const handlePurchaseClose = () => {
    setAnchorPurchase(null);
    // handleMobileMenuClose();
  };

  //@desc rent menu open
  const handleRentMenuOpen = (event) => {
    setAnchorRent(event.currentTarget);
  };

  //@desc Rent menu close
  const handleRentClose = () => {
    setAnchorRent(null);
    // handleMobileMenuClose();
  };

  //@desc sell menu open
  const handleSellMenuOpen = (event) => {
    setAnchorSell(event.currentTarget);
  };

  //@desc sell menu close
  const handleSellClose = () => {
    setAnchorSell(null);
    // handleMobileMenuClose();
  };

  //@desc parent menu close
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  //@desc parent menu open
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //@desc profile menu render
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
        // margin:"auto"
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link href={"/login"} underline="none" color="inhiret">
        <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  //@desc purchase menu render
  const PurshasRenderMoenu = (
    <Menu
      anchorEl={anchorPurchase}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
        // margin:"auto"
      }}
      id={purshaseId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isPurchaseOpen}
      onClose={handlePurchaseClose}
      // sx={{width:2212}}
    >
      <Link href={"/buy-home"} underline="none" color="inhiret">
        <MenuItem onClick={handlePurchaseClose}>purchase home</MenuItem>
      </Link>
      <Link href={"/buy-land"} underline="none" color="inhiret">
        <MenuItem onClick={handlePurchaseClose}>purchase land</MenuItem>
      </Link>
      <Link href={"/buy-stock"} underline="none" color="inhiret">
        <MenuItem onClick={handlePurchaseClose}>purchase stock</MenuItem>
      </Link>
    </Menu>
  );

  //@desc sell menu render
  const SellRenderMoenu = (
    <Menu
      anchorEl={anchorSell}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
        // margin:"auto"
      }}
      id={sellId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isSellOpen}
      onClose={handleSellClose}
      // sx={{width:2212}}
    >
      <Link href={"/sell-home"} underline="none" color="inhiret">
        <MenuItem onClick={handleSellClose}>sell home</MenuItem>
      </Link>
      <Link href={"/sell-land"} underline="none" color="inhiret">
        <MenuItem onClick={handleSellClose}>sell land</MenuItem>
      </Link>
      <Link href={"/sell-stock"} underline="none" color="inhiret">
        <MenuItem onClick={handleSellClose}>sell stock</MenuItem>
      </Link>
    </Menu>
  );

  //@desc rent menu render
  const RentRenderMoenu = (
    <Menu
      anchorEl={anchorRent}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
        // margin:"auto"
      }}
      id={rentId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isRentOpen}
      onClose={handleRentClose}
      // sx={{width:2212}}
    >
      <Link href={"/rent-land"} underline="none" color="inhiret">
        <MenuItem onClick={handleRentClose}>rent home</MenuItem>
      </Link>
      <Link href={"/rent-land"} underline="none" color="inhiret">
        <MenuItem onClick={handleRentClose}>rent land</MenuItem>
      </Link>
      <Link href={"/rent-stock"} underline="none" color="inhiret">
        <MenuItem onClick={handleRentClose}>rent stock</MenuItem>
      </Link>
    </Menu>
  );

  //@desc mobile menu render
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
        marginRight: "8px",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuList sx={{ width: 220, marginRight: 0 }}>
        <Link href={"/cart"} underline="none" color="inhiret">
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={2} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <p>Cart </p>
          </MenuItem>
        </Link>

        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
          <NavigateNextIcon />
        </MenuItem>

        <MenuItem onClick={handlePurchaseMenuOpen}>
          <IconButton
            size="large"
            aria-label="purchase"
            aria-controls="primary-search-purshase-menu"
            aria-haspopup="true"
            color="inherit"
          >
            {/* <Badge badgeContent={2} color="error"> */}
            <MonetizationOnIcon />
            {/* </Badge> */}
          </IconButton>
          <p>Purchase</p>
          <NavigateNextIcon />
        </MenuItem>

        <MenuItem onClick={handleRentMenuOpen}>
          <IconButton
            size="large"
            aria-label="rent"
            aria-controls="primary-search-rent-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <SupervisedUserCircleIcon />
          </IconButton>
          <p>Rent</p>
          <NavigateNextIcon />
        </MenuItem>

        <MenuItem onClick={handleSellMenuOpen}>
          <IconButton
            size="large"
            aria-label="sell"
            aria-controls="primary-search-sell-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <SellIcon />
          </IconButton>
          <p>Sell</p>
          <NavigateNextIcon />
        </MenuItem>

        <Link href={"/contact"} underline="none" color="inhiret">
          <MenuItem className="flex items-center">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <ContactsIcon />
            </IconButton>
            <p>Contact </p>
          </MenuItem>
        </Link>
        <Link href={"/about"} underline="none" color="inhiret">
          <MenuItem className="flex items-center">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <InfoIcon />
            </IconButton>
            <p>About </p>
          </MenuItem>
        </Link>
        <Link href={"/help"} underline="none" color="inhiret">
          <MenuItem className="flex items-center">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <HelpIcon />
            </IconButton>
            <p>Help </p>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{ justifyContent: "space-around" }}
          className={`${theme.palette.AppBarbackgroundColor}`}
        >
          {/* 1 */}
          <Box>
            <Link href={"/"} underline="none" color="inhiret">
              <Typography
                variant="h6"
                noWrap={false}
                component="div"
                marginRight={1}
              >
                Reale Estate
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-around",
              },
            }}
            className="items-center"
          >

            <Link href={"/buy"} underline="none" color="inhiret">
              <MenuItem className="flex items-center">
                <p>Buy </p>
              </MenuItem>
            </Link>

            <Link href={"/rent"} underline="none" color="inhiret">
              <MenuItem className="flex items-center">
                <p>Rent </p>
              </MenuItem>
            </Link>

            <Link href={"/sell"} underline="none" color="inhiret">
              <MenuItem className="flex items-center">
                <p>Sell </p>
              </MenuItem>
            </Link>
          </Box>
          {/* 2 */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-around",
              },
            }}
            className="items-center"
          >
            <Link href={"/contact"} underline="none" color="inhiret">
              <MenuItem className="flex items-center">
                <p>Contact </p>
              </MenuItem>
            </Link>
            <Link href={"/about"} underline="none" color="inhiret">
              <MenuItem className="flex items-center">
                <p>About </p>
              </MenuItem>
            </Link>
            <Link href={"/help"} underline="none" color="inhiret">
              <MenuItem className="flex items-center">
                <p>Help </p>
              </MenuItem>
            </Link>
          </Box>
          {/* 3 */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-around",
              },
            }}
            className="items-center"
          >
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            {/* 4 dark-light-mode-icon*/}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                sx={{ ml: 1 }}
                onClick={() => {
                  localStorage.setItem(
                    "currentTheme",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode(theme.palette.mode === "light" ? "dark" : "light");
                }}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7 sx={{ color: "orange" }} />
                ) : (
                  <Brightness4 />
                )}
              </IconButton>
            </Box>
          </Box>

          {/* 4 dark-light-mode-icon*/}

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                setMode(theme.palette.mode === "dark" ? "light" : "dark");
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "orange" }} />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </Box>

          {/* 4 */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {PurshasRenderMoenu}
      {SellRenderMoenu}
      {RentRenderMoenu}
    </Box>
  );
};
export default NavBar;
