import { useLoaderData, useNavigate } from "react-router-dom";
import type { Game } from "../types/game";
import type { GameDetails } from "../types/game";
import { Link } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import { gamesService } from "../services/gameService";
import { useEffect, useState } from "react";

const GameDetail = () => {
  const game = useLoaderData() as Game;
  const gameDetails = useLoaderData() as GameDetails;

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

  if (!game) return <p className="p-8 text-center text-xl">Juego no encontrado 😢</p>;

  return (
    <div className="min-h-screen bg-dark-blue text-white">
      {/* Navbar */}
      <Navbar
        categories={categories}
        platforms={platforms}
        onSelectCategory={handleSelectCategory}
        onSelectPlatform={handleSelectPlatform}
      />

      <div className="p-8">
        {/* Botón de regresar */}
        <Link
          to="/"
          className="inline-block mb-6 px-4 py-2 bg-pink rounded hover:bg-pink/80 transition"
        >
          ← Volver a la lista
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Imagen del juego */}
          <img
            src={game.thumbnail}
            alt={game.title}
            className="rounded-xl w-full md:w-1/3 object-cover"
          />

          {/* Información del juego */}
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{game.title}</h1>

            <p className="text-lg text-grey">{game.short_description}</p>

            <div className="grid grid-cols-2 gap-4 mt-4 text-white/80">
              <p><span className="font-bold">Plataforma:</span> {game.platform}</p>
              <p><span className="font-bold">Género:</span> {game.genre}</p>
              <p><span className="font-bold">Fecha de lanzamiento:</span> {game.release_date}</p>
              <p><span className="font-bold">Desarrollador:</span>{" "}
                  <Link
                    to={`/developer/${encodeURIComponent(game.developer)}`}
                    className=" hover:underline text-yellow-400">
                    {game.developer}
                  </Link>
              </p>
            </div>
            {/* Botón opcional de jugar o link externo */}
            {gameDetails.game_url && (
              <a
                href={gameDetails.game_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-3 bg-green rounded hover:bg-green/80 text-center w-max transition"
              >
                Ir al juego
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
