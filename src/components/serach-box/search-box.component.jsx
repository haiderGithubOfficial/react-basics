import "./search-box.styles.css";

const SearchBox = ({ onchangeEvent, placeholder, monsterClassName }) => (
  <input
    key={"search-box"}
    className={`search-box ${monsterClassName}`}
    type="search"
    placeholder={placeholder}
    onChange={onchangeEvent}
  ></input>
);

export default SearchBox;
