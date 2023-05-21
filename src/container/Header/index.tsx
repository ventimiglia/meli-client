import SearchBox from "../../components/SearchBox";
import "./styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <section className="header__container">
        <Link to="/" className="header__logo"></Link>
        <SearchBox />
      </section>
    </header>
  );
};

export default Header;
