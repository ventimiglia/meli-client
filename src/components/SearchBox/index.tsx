import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/items?search=${searchValue}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Nunca dejes de buscar"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
