import type { Game, GameDetails } from "../types/game";


const BASE_URL = "/api";

async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

export const gamesService = {
  getAllGames: (): Promise<Game[]> => {
    return fetchFromAPI<Game[]>("/games");
  },

  getGamesByCategory: (category: string): Promise<Game[]> => {
    return fetchFromAPI<Game[]>(`/games?category=${category}`);
  },

  getGamesByPlataform: (plataform: string): Promise<Game[]> => {
    return fetchFromAPI<Game[]>(`/games?platform=${plataform}`);
  },

  getGameById: (id: string): Promise<GameDetails> => {
    return fetchFromAPI<GameDetails>(`/game?id=${id}`);
  },
};
