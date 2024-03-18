import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Application from "../Pages/Application/Application";
import Jobs from "../Pages/Jobs/Jobs";
import AddJob from "../Pages/Jobs/AddJob";

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
        },
        {
            path: "/jobs",
            element: <Jobs />
        },
        {
            path: "/add-job",
            element: <AddJob />
        },
      ]
    },
    {
        path: "*",
        element: <Error />
    }
  ]);