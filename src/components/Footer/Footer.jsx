import { Container } from "components";
import css from "./Footer.module.css";

/**
 * Footer component containing useful links and information.
 * @returns {JSX.Element} Rendered footer component.
 */
const Footer = () => {
  return (
    <footer className={css["page-footer"]}>
      <Container>
        <div className={css.references}>
          Credits: This web application uses 
          <a 
            className={css["tmdb-reference-logo"]} 
            href="https://www.themoviedb.org/"
            title="The Movie Database"
          >
            <img 
              className={css["tmdb-reference-logo"]}
              src={require("images/attribution-tmdb.svg").default}
              alt="the movie database logotype"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
          <span>and the&nbsp;</span>
          <a 
            className={css["tmdb-reference-logo"]} 
            href="https://developer.themoviedb.org/docs/getting-started"
            title="The Movie Database API"
          >
            TMDB APIs
          </a>
          <span>&nbsp;but is not endorsed, certified, or otherwise approved by TMDB.</span>
        </div>
      </Container>
    </footer>
  )
};

export default Footer;