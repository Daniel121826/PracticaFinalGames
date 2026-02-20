import { gamesService } from "../../services/gameService";
import type { Game } from "../../types/game";

export const developerLoader = async ({ params }: any) => {
  const developerName = decodeURIComponent(params.developerName);

  // Traemos todos los juegos
  const allGames: Game[] = await gamesService.getAllGames();

  // Filtramos los juegos de este desarrollador (ignora mayúsculas y espacios)
  const gamesByDeveloper = allGames.filter(
    game => game.developer.trim().toLowerCase() === developerName.trim().toLowerCase()
  );

  // Creamos una descripción dinámica a partir de los juegos
  const description = gamesByDeveloper.length
    ? `El desarrollador ${developerName} ha creado ${gamesByDeveloper.length} juego${
        gamesByDeveloper.length > 1 ? "s" : ""
      } en nuestra plataforma. Algunos de sus títulos destacados son: ${gamesByDeveloper
        .slice(0, 3)
        .map(g => g.title)
        .join(", ")}.`
    : `No hay juegos disponibles de ${developerName}.`;

  return {
    developerName,
    games: gamesByDeveloper,
    description
  };
};