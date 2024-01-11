
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

export const dashboardData = [
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
        link: "/add-home",
    },
    {
        name: "Add Category",
        icon: <AddCircleOutlineIcon fontSize="small" />,
        link: "/add-category",
    },
    {
        name: "Add Land",
        icon: <LandscapeIcon fontSize="small" />,
        link: "/add-land",
    },
    {
        name: "Add Stock",
        icon: <ShowChartIcon fontSize="small" />,
        link: "/add-stock",
    },
];