import { useLoaderData } from "react-router-dom";
import type { Game } from "../types/game";

const Home = () => {
    const games = (useLoaderData() as Game[]) || [];

    return (
        <div>
            <h1>Lista de juegos</h1>
            <p>Total: {games.length}</p>
        </div>
    );
};

export default Home;