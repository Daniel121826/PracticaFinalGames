import { useLoaderData, useNavigate } from "react-router-dom"; 
import type { Game } from "../types/game";
import GameCard from "../components/atoms/GameCard"; // importa tu GameCard
import Navbar from "../components/organisms/Navbar";// importa tu Navbar
import "./Home.css"; // estilos específicos para esta página
import { gamesService } from "../services/gameService";
import { useEffect, useState } from "react";
import "../components/atoms/GameCard.css"; // estilos para GameCard


type DeveloperData = {
  developerName: string;
  games: Game[];
  description: string;
};

const Developer = () => {
  const { developerName, games, description } = useLoaderData() as DeveloperData;
    const navigate = useNavigate();
  const [categories, setCategories] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<string[]>([]);

  // Cargar categorías y plataformas dinámicamente
  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const allGames = await gamesService.getAllGames();
        setCategories(Array.from(new Set(allGames.map(g => g.genre))).sort());
        setPlatforms(Array.from(new Set(allGames.map(g => g.platform))).sort());
      } catch (error) {
        console.error("Error fetching categories/platforms", error);
      }
    };
    fetchMeta();
  }, []);

  // Handlers para redirigir a Home con filtros
  const handleSelectCategory = (category: string) => {
    navigate(`/?category=${encodeURIComponent(category)}`);
  };

  const handleSelectPlatform = (platform: string) => {
    navigate(`/?platform=${encodeURIComponent(platform)}`);
  };

  return (
    <div className="min-h-screen text-white bg-color-black">
      {/* Navbar */}
      <Navbar
        categories={categories}
        platforms={platforms}
        onSelectCategory={handleSelectCategory}
        onSelectPlatform={handleSelectPlatform}
      />

      <div className="px-8">

        {/* Información del desarrollador */}
        <div className="mt-6">
          <h1 className="text-4xl font-bold">{developerName}</h1>
          <p className="text-light-grey mt-2 max-w-2xl">{description}</p>
        </div>

        {/* Juegos del desarrollador */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Juegos de este desarrollador
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-20">
          {games.length > 0 ? (
            games.map((game) => <GameCard key={game.id} game={game} />)
          ) : (
            <p className="text-light-grey mt-4">
              No se encontraron juegos para este desarrollador
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Developer;