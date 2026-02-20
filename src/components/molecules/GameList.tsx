import type { Game } from "../../types/game";
import GameCard from "../atoms/GameCard";

interface Props {
  games: Game[];
}

const GameList = ({ games }: Props) => {
  return (
    <div className="flex justify-center px-20">
    <div className="grid grid-cols-4 gap-4 ">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
    </div>
  );
};

export default GameList;
