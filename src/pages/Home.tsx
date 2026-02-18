import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import type { Game } from "../types/game";
import { Input } from "../components/atoms/InputSearch";
import GameList from "../components/molecules/GameList";
import "./Home.css"

const Home = () => {
  const games = (useLoaderData() as Game[]) || [];
  const [search, setSearch] = useState("");

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Lista de juegos</h1>
      <p>Total: {filteredGames.length}</p>

      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <GameList games={filteredGames} />
    </div>
  );
};

export default Home;
