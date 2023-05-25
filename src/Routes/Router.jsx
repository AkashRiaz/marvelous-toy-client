import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import Resister from "../components/Resister/Resister";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddAToy from "../components/AddAToy/AddAToy";
import AllToys from "../components/AllToys/AllToys";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../components/MyToys/MyToys";
import UpdateMyToy from "../components/UpdateMyToy/UpdateMyToy";
import Blogs from "../components/Home/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "resister",
        element: <Resister></Resister>,
      },
      {
        path: "addatoy",
        element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>,
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "allToys/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails></ToyDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-side-two.vercel.app/allToys/${params.id}`
          ),
      },
      {
        path: "myToy",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "updateToy/:id",
        element: <UpdateMyToy></UpdateMyToy>,
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-side-two.vercel.app/allToy/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
