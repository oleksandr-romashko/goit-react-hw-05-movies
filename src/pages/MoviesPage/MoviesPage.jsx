import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MoviesList, SearchForm, Container, Loader, FallbackUI } from "components";
import api from "services/api";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleMovieSearch = (query) => {
      if(query) {
        setIsLoading(true);
        setError(null);
        api.getMoviesByTitle(query)
          .then(foundMovies => {
            setFoundMovies(foundMovies);
          })
          .catch(error => {
            setError(error);
            console.error(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
    
    if (!searchParams.get("query")) return;

    handleMovieSearch(searchParams.get("query"));
  }, [searchParams]);

  const handleSearchParamsUpdate = query => {
    setSearchParams({query: query});
  };

  return (
    <section className={css["movies"]}>
      <Container>
          <SearchForm onSearch={handleSearchParamsUpdate} />
          {error && <FallbackUI />}
          {isLoading ? <Loader /> : <MoviesList movies={foundMovies} />}
      </Container>
    </section>
  )
};

export default MoviesPage;