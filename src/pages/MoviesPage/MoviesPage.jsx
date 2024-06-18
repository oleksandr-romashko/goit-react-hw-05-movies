import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MoviesList, SearchForm, Container, Loader, FallbackUI } from "components";
import api from "services/api";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = searchParams.get("search");
    if (!searchParams || !query) {
      setFoundMovies(null);
      const inputEl = document.getElementById("searchQueryInput");
      if (document.activeElement !== inputEl) {
        inputEl.focus();
      }
      return;
    }
    
    setIsLoading(true);
    setError(null);
    api.getMoviesByTitle(query)
      .then(foundMovies => {
        setFoundMovies(foundMovies);
      })
      .catch(error => {
        setError(error);
        setFoundMovies(null);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  return (
    <section className={css["movies"]}>
      <Container>
          <SearchForm />
          {error && <FallbackUI />}
          {isLoading && !error
            ? <Loader />
            : <MoviesList movies={foundMovies} />
          }
      </Container>
    </section>
  );
};

export default MoviesPage;