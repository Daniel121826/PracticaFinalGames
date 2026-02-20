import type { Game } from "../../types/game";
import { Link } from "react-router-dom";
import "./GameCard.css";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="bg-dark-blue rounded-xl mr-4 mb-4">
      <Link to={`/game/${game.id}`}>
      <img src={game.thumbnail} alt={game.title} className="rounded-t-xl w-full"/>
      <div className="p-5">
        <h1 className="text-2xl text-center pb-3 font-bold text-grey">{game.title}</h1>
        <p className="text-dark-grey text-lg truncate pb-2">{game.short_description}</p>
        <p className="text-dark-grey text-lg">{game.platform}</p>
        <p className="text-dark-grey text-lg">{game.genre}</p>
      </div>
      </Link>
    </div>
  );
};

export default GameCard;
