import { gamesService } from "../../services/gameService";

export const gameDetailsLoader = async ({ params }: any) => {
  try {
    const game = await gamesService.getGameById(params.id);

    if (!game) {
      throw new Response("Juego no encontrado", { status: 404 });
    }

    return game;
  } catch (error) {
    throw new Response("Error cargando el detalle del juego", { status: 500 });
  }
};