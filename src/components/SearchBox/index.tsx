import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "../../assets/icons/search.svg"
import "./styles.scss";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!searchValue) return;
    navigate(`/items?search=${searchValue}`);
  };

  return (
    <form className="search-box__form" onSubmit={onSubmit}>
      <input
        placeholder="Nunca dejes de buscar"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="search-box__input"
        aria-label="Ingresá lo que quieras encontrar"
        maxLength={50}
        role="search"
        />
      <button type="submit" className="search-box__button">
        <img
          src={SearchIcon}
          alt="Buscar"
          width={20}
          height={20}
          aria-label="Buscar"
          role="button"
        />
      </button>
    </form>
  );
};

export default SearchBox;
