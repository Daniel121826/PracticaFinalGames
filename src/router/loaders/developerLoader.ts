import { gamesService } from "../../services/gameService";

export const developerLoader = async ({ params }: any) => {
  const developerName = decodeURIComponent(params.developerName);

  try {
    const allGames = await gamesService.getAllGames();

    if (!allGames || !Array.isArray(allGames)) {
      throw new Response("Error cargando los juegos", { status: 500 });
    }

    const gamesByDeveloper = allGames.filter(
      game =>
        game.developer.trim().toLowerCase() ===
        developerName.trim().toLowerCase()
    );

    if (gamesByDeveloper.length === 0) {
      throw new Response("Desarrollador no encontrado", { status: 404 });
    }

    return {
      developerName,
      games: gamesByDeveloper,
      description: `El desarrollador ${developerName} ha creado ${gamesByDeveloper.length} juego${
        gamesByDeveloper.length > 1 ? "s" : ""
      }.`,
    };
  } catch (error) {
    throw new Response("Error cargando el desarrollador", { status: 500 });
  }
};