import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Authointication/Register";
import Login from "../Pages/Authointication/Login";
import AvilableFoods from "../Pages/AvilableFoods";
import AddFood from "../Pages/AddFood";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/available",
                element: <AvilableFoods></AvilableFoods>
            },
            {
                path: "/add-food",
                element: <AddFood></AddFood>
            },
            {
                path: "/manage",
                element: <Home></Home>
            },
            {
                path: "/food-request",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
]);

export default router;