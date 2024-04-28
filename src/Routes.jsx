import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Error from "./Components/Error";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUpIn/SignUp";
import SignIn from "./Components/SignUpIn/SignIn";
import AddCraft from "./Components/AddCraft/AddCraft";
import CraftList from "./Components/CraftList/CraftList";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";
import UpdateData from "./Components/Update/UpdateData";
import AllArtAndCraft from "./Components/AllArtAndCraft/AllArtAndCraft";
import { GiPrivateFirstClass } from "react-icons/gi";
import ViewDEtails from "./Components/ViewDetails/ViewDEtails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/up',
            element:<SignUp></SignUp>
        },
        {
            path:'/in',
            element:<SignIn></SignIn>
        },
        {
          path:'/addCraft',
          element:<PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>
        },
        {
          path:'/list',
          element:<PrivateRoutes><CraftList></CraftList></PrivateRoutes>,
          loader:() => fetch('https://craft-server-site.vercel.app/craft')
        },
        {
          path:'/update/:id',
          element:<PrivateRoutes><UpdateData></UpdateData></PrivateRoutes>,
      loader: ({params}) => fetch(`https://craft-server-site.vercel.app/craft/${params.id}`)
        },
        {
          path:'/all',
          element:<AllArtAndCraft></AllArtAndCraft>
        },
        {
          path:'/details/:id',
          element:<PrivateRoutes><ViewDEtails></ViewDEtails></PrivateRoutes>,
          loader: ({params}) => fetch(`https://craft-server-site.vercel.app/craft/${params.id}`)
        }

      ]
    },
  ]);

  export default router;