import { gamesService } from "../../services/gameService";

export const gamesLoader = async () => {
  try {
    const games = await gamesService.getAllGames();

    if (!games || !Array.isArray(games)) {
      throw new Response("Error al cargar los juegos", { status: 500 });
    }

    return games;
  } catch (error) {
    throw new Response("No se pudieron cargar los juegos", { status: 500 });
  }
};