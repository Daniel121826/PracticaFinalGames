import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { gamesLoader } from "./loaders/gameLoader";
import GameDetail from "../pages/GameDetail";
import { gameDetailsLoader } from "./loaders/gameDetailLoader";
import { developerLoader } from "./loaders/developerLoader";
import Developer from "../pages/Developer";

const ErrorPage = () => {
  return (
    <div>
      <h1>Error</h1>
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