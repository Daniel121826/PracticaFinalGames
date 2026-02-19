import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Game } from "../types/game";
import { Input } from "../components/atoms/InputSearch";
import GameList from "../components/molecules/GameList";
import Navbar from "../components/organisms/Navbar";
import { gamesService } from "../services/gameService";
import { useNavigate, useLocation } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category") || "";
  const initialPlatform = params.get("platform") || "";

  const games = (useLoaderData() as Game[]) || [];
  const [gamesState, setGames] = useState<Game[]>(games);
  const [categories, setCategories] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedPlatform, setSelectedPlatform] = useState<string>(initialPlatform);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar juegos, categorías y plataformas
  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const allGames = await gamesService.getAllGames();
        setCategories(Array.from(new Set(allGames.map(g => g.genre))).sort());
        setPlatforms(Array.from(new Set(allGames.map(g => g.platform))).sort());

        let filtered = allGames;

        if (initialCategory) {
          filtered = filtered.filter(game => game.genre === initialCategory);
          setSelectedCategory(initialCategory);
        }
        if (initialPlatform) {
          filtered = filtered.filter(game => game.platform === initialPlatform);
          setSelectedPlatform(initialPlatform);
        }

        setGames(filtered);
      } catch (err) {
        setError("No se pudieron cargar los juegos. Intenta de nuevo.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [initialCategory, initialPlatform]);

  // Funciones para seleccionar filtros
  const handleSelectCategory = (category: string) => {
    navigate(`/?category=${encodeURIComponent(category)}`);
  };

  const handleSelectPlatform = (platform: string) => {
    navigate(`/?platform=${encodeURIComponent(platform)}`);
  };

  // Filtrado por búsqueda
  const filteredGames = gamesState.filter(game =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar
        categories={categories}
        platforms={platforms}
        onSelectCategory={handleSelectCategory}
        onSelectPlatform={handleSelectPlatform}
      />

      <div className="p-6">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading && (
          <div className="flex justify-center items-center py-10">
            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {error && <p className="text-center text-red-500 py-4">{error}</p>}

        {!loading && !error && (
          <GameList games={filteredGames} />
        )}
      </div>
    </div>
  );
};

export default Home;




