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
          loader:() => fetch('http://localhost:5000/craft')
        },
        {
          path:'/update/:id',
          element:<PrivateRoutes><UpdateData></UpdateData></PrivateRoutes>,
      loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
        }

      ]
    },
  ]);

  export default router;