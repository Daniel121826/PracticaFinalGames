import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { gamesLoader } from "./loaders/gameLoader";
import GameDetail from "../pages/GameDetail";
import { gameDetailsLoader } from "./loaders/gameDetailLoader";
import { developerLoader } from "./loaders/developerLoader";
import Developer from "../pages/Developer";
import ErrorPage from "../pages/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: gamesLoader,
    errorElement: <ErrorPage />
  },
  {
    path: "/game/:id",
    element: <GameDetail />,
    loader: gameDetailsLoader,
    errorElement: <ErrorPage />
  },
  {
    path: "/developer/:developerName",
    element: <Developer />,
    loader: developerLoader,
    errorElement: <ErrorPage />
  }
]);