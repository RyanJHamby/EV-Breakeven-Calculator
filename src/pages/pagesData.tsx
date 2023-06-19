import { routerType } from "../types/router.types";
import EmissionsInfoPage from "./EmissionsInfoPage";
import MainPage from "./MainPage";

const pagesData: routerType[] = [
    {
        path: "",
        element: <MainPage />,
        title: "home"
    },
    {
        path: "emissions",
        element: <EmissionsInfoPage />,
        title: "emissions"
    }
];

export default pagesData;