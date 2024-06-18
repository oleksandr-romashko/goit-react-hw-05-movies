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
    const handleMovieSearch = (searchQuery) => {
      if(searchQuery) {
        setIsLoading(true);
        setError(null);
        api.getMoviesByTitle(searchQuery)
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
    
    const searchQuery = searchParams.get("search");
    if (!searchQuery) {
      return;
    }
    handleMovieSearch(searchQuery);
  }, [searchParams]);

  const handleSearchParamsUpdate = searchQuery => {
    setSearchParams({search: searchQuery});
  };

  return (
    <section className={css["movies"]}>
      <Container>
          <SearchForm onSearch={handleSearchParamsUpdate} />
          {error && <FallbackUI />}
          {isLoading 
            ? <Loader /> 
            : <MoviesList movies={foundMovies} 
          />}
      </Container>
    </section>
  )
};

export default MoviesPage;