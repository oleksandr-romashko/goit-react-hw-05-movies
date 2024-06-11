import { Container } from "components";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css["page-footer"]}>
      <Container>
        <div className={css.references}>
          <p>
            
          </p>
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
          and the&nbsp;
          <a 
            className={css["tmdb-reference-logo"]} 
            href="https://developer.themoviedb.org/docs/getting-started"
            title="The Movie Database API"
          >
            TMDB APIs
          </a>
          &nbsp;but is not endorsed, certified, or otherwise approved by TMDB.
          </div>
      </Container>
    </footer>
  )
};

export default Footer;