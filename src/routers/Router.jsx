import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Authointication/Register";
import Login from "../Pages/Authointication/Login";
import AvilableFoods from "../Pages/AvilableFoods";
import AddFood from "../Pages/AddFood";
import PrivateRouter from "./PrivateRouter";
import ManageFood from "../Pages/ManageFood";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import FoodDetails from "../Pages/FoodDetails";
import FoodReqest from "../Pages/FoodReqest";
import ErrorPage from "../Pages/ErrorPage";
const axiosSecure = useAxiosSecure()

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRouter><AddFood isUpdate={false}></AddFood></PrivateRouter>
            },
            {
                path: "/manage",
                element: <PrivateRouter><ManageFood></ManageFood></PrivateRouter>
            },
            {
                path: "/food-request",
                element: <PrivateRouter><FoodReqest></FoodReqest></PrivateRouter>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/update/:id",
                element: <PrivateRouter><AddFood isUpdate={true}></AddFood></PrivateRouter>
            },
            {
                path: "/food/:id",
                element: <PrivateRouter><FoodDetails></FoodDetails></PrivateRouter>,
                loader: ({ params }) => axiosSecure.get(`/food/${params.id}`)
            }
        ]
    },
]);

export default router;