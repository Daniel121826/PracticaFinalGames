import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Game } from "../types/game";
import { Input } from "../components/atoms/InputSearch";
import GameList from "../components/molecules/GameList";
import Navbar from "../components/organisms/Navbar";
import { gamesService } from "../services/gameService";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const games = (useLoaderData() as Game[]) || [];
  const [gamesState, setGames] = useState<Game[]>(games);
  const [categories, setCategories] = useState<string[]>([]);
  const [plataforms, setPlataforms] = useState<string[]>([]);
  const [selectedPlataform, setSelectedPlataform] = useState<string>("");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category") || "";
  const initialPlatform = params.get("platform") || "";

  // Cargar categorías dinámicas al montar
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const allGames = await gamesService.getAllGames();
        setCategories(Array.from(new Set(allGames.map(g => g.genre))).sort());
        setPlataforms(Array.from(new Set(allGames.map(g => g.platform))).sort());

        // Aplicar filtros iniciales si vienen por URL
        let filtered = allGames;

        if (initialCategory) {
          filtered = filtered.filter(game => game.genre === initialCategory);
          setSelectedCategory(initialCategory);
        }

        if (initialPlatform) {
          filtered = filtered.filter(game => game.platform === initialPlatform);
          setSelectedPlataform(initialPlatform);
        }

        setGames(filtered);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, [initialCategory, initialPlatform]);




  // Al seleccionar categoría
  // Al seleccionar categoría
  const handleSelectCategory = (category: string) => {
    navigate(`/?category=${encodeURIComponent(category)}`);
  };

  // Al seleccionar plataforma
  const handleSelectPlataform = (platform: string) => {
    navigate(`/?platform=${encodeURIComponent(platform)}`);
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


