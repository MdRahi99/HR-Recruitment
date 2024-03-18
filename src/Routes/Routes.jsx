import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Application from "../Pages/Application/Application";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "/application",
            element: <Application />
        }
      ]
    },
    {
        path: "*",
        element: <Error />
    }
  ]);