import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import EmissionsInfoPage from "./pages/EmissionsInfoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
    {
    path: "/emissions-info",
    element: <EmissionsInfoPage />,
    errorElement: <ErrorPage />,
  },
]);

// export default function routes() {
//   return <RouterProvider
//             router={router}
//   />
// }