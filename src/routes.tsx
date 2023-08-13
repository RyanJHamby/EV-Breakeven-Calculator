import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CalculatorPage from "./pages/CalculatorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
    {
    path: "/emissions-info",
    element: <CalculatorPage />
  },
]);