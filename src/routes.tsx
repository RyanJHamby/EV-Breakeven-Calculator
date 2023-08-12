import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import CalculatorPage from "./pages/CalculatorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
    {
    path: "/emissions-info",
    element: <CalculatorPage />,
    errorElement: <ErrorPage />,
  },
]);