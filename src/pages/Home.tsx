import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Game } from "../types/game";
import { Input } from "../components/atoms/InputSearch";
import GameList from "../components/molecules/GameList";
import Navbar from "../components/organisms/Navbar";
import { gamesService } from "../services/gameService";
import "./Home.css";

const Home = () => {
  const games = (useLoaderData() as Game[]) || [];
  const [gamesState, setGames] = useState<Game[]>(games);
  const [categories, setCategories] = useState<string[]>([]);
  const [plataforms, setPlataforms] = useState<string[]>([]);
  const [selectedPlataform, setSelectedPlataform] = useState<string>("");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Cargar categorías dinámicas al montar
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        // Traemos todos los juegos desde tu service
        const allGames = await gamesService.getAllGames();

        // Guardamos todos los juegos en el estado principal
        setGames(allGames);

        // Extraemos categorías únicas
        const uniqueGenres = Array.from(new Set(allGames.map(game => game.genre)));
        setCategories(uniqueGenres.sort());

        // Extraemos plataformas únicas
        const uniquePlataforms = Array.from(new Set(allGames.map(game => game.platform)));
        setPlataforms(uniquePlataforms.sort());

      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    fetchFilters();
  }, []);



  // Al seleccionar categoría
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setGames(games.filter(game => game.genre === category));
    setSearch("");
  };

  // Al seleccionar plataforma
  const handleSelectPlataform = (platform: string) => {
    setSelectedPlataform(platform);
    setGames(games.filter(game => game.platform === platform));
    setSearch("");
  };


  // Filtrar por búsqueda dentro de la categoría seleccionada
  const filteredGames = gamesState.filter(game =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar
        categories={categories}
        platforms={plataforms}
        onSelectCategory={handleSelectCategory}
        onSelectPlatform={handleSelectPlataform}
      />


      <div className="p-6">
        <h1 className="text-2xl font-bold mb-2">Lista de juegos</h1>
        <p className="mb-4">Total: {filteredGames.length}</p>

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <GameList games={filteredGames} />
      </div>
    </div>
  );
};

export default Home;


