import { gamesService } from "../../services/gameService";

export const gameDetailsLoader = async ({ params }: any) => {
  try {
    return await gamesService.getGameById(params.id);
  } catch (error) {
    throw new Response("Juego no encontrado", { status: 404 });
  }
};