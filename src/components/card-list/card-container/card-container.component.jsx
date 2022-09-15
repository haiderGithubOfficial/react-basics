import "./card-container.styles.css";

const CardContainer = ({ monsterData: { name, email, id } }) => {
  console.log("test");
  console.log("new feature");
  return (
    <div key={id} className="card-container">
      <img
        className=""
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster: ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardContainer;
