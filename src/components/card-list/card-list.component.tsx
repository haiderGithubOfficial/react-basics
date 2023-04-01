import "./card-list.styles.css";
import CardContainer from "./card-container/card-container.component";
import { Monster } from "../../App";

type CardListProps = {
  monster: Monster[];
};

const CardList = ({ monster }: CardListProps) => {
  return (
    <div className="card-list">
      {monster.map((monster) => (
        <CardContainer monsterData={monster} />
      ))}
    </div>
  );
};

export default CardList;
