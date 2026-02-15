import { gamesService } from "../../services/gameService";

export const gamesLoader = async () => {
  try {
    const games = await gamesService.getAllGames();

    console.log("Loader success:", games);

    // 👇 Siempre devolver array válido
    return Array.isArray(games) ? games : [];
  } catch (error) {
    console.error("Loader error:", error);

    // 👇 Nunca lanzar error
    return [];
  }
};