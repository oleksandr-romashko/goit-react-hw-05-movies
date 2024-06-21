import { NavLink } from "react-router-dom";
import { Container } from "components";
import css from "./Header.module.css";

/**
 * Header component containing main navigation and feedback link.
 * @returns {JSX.Element} Rendered header component.
 */
const Header = () => {
  return (
    <header className={`${css["page-header"]} prevent-select`}>
      <Container>
        <p className={css.references}>
          <span>Any problems or suggestions? Please leave them&nbsp;</span>
          <a 
            className={css["repo-reference"]}
            href="https://github.com/oleksandr-romashko"
            title="Developer GitHub page"
            target="_blank"
            rel="noopener noreferrer">
              here
          </a>.
        </p>
        <nav className={css["navigation"]}>
          <NavLink to="/" className={css["navigation-link"]}>Home</NavLink>
          <NavLink to="/movies" className={css["navigation-link"]}>Movies</NavLink>
        </nav>
      </Container>
    </header>
  )
};

export default Header;