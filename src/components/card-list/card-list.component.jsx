import "./card-list.styles.css";
import CardContainer from "./card-container/card-container.component";

const CardList = ({ monster }) => {
  return (
    <div className="card-list">
      {monster.map((monster) => (
        <CardContainer monsterData={monster} />
      ))}
    </div>
  );
};

export default CardList;
