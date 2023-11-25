import * as React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/routes/Home";
import Episodes from "./components/routes/Episodes";
import Characters from "./components/routes/Characters";
import ErrorPage from "./components/routes/ErrorPage";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Home />
        ),
      },
      {
        path: "episodes",
        element: <Episodes />,
      },
      {
        path: "characters",
        element: <Characters />,
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

