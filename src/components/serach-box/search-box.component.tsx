import { ChangeEventHandler } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
  onchangeEvent: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  monsterClassName: string;
};

const SearchBox = ({
  onchangeEvent,
  placeholder,
  monsterClassName,
}: SearchBoxProps) => (
  <input
    key={"search-box"}
    className={`search-box ${monsterClassName}`}
    type="search"
    placeholder={placeholder}
    onChange={onchangeEvent}
  ></input>
);

export default SearchBox;
