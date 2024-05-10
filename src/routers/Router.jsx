import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";

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
                element: <Home></Home>
            },
            {
                path: "/add-food",
                element: <Home></Home>
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
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Home></Home>
            },
        ]
    },
]);

export default router;