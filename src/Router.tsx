import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.tsx";
import { ROUTES } from "./constants/routes.ts";

export const router = createBrowserRouter([
  {
    path: ROUTES.AUTH.LOGIN,
    element: <Login />,
    /*errorElement: <ErrorPage />,*/
  }
]);
