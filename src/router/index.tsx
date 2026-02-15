import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { gamesLoader } from "./loaders/gameLoader";
const ErrorPage = () => {
    return (
        <div>
            <h1>Error 😢</h1>
            <p>No se pudieron cargar los datos</p>
        </div>
    );
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        loader: gamesLoader,
        errorElement: <ErrorPage />
    },

]);

