import { useState } from "react";
import { MoviesList, SearchForm, Container, Loader, FallbackUI } from "components";
import api from "services/api";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foundMovies, setFoundMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query)
  }

  const handleMovieSearch = (event) => {
    event.preventDefault();
    const query = event.target.searchQuery.value;
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
          setSearchQuery("")
          setIsLoading(false)
          event.target.searchQuery.blur();
        });
    }
  }

  return (
    <section className={css["movies"]}>
      <Container>
          <SearchForm searchQuery={searchQuery} onQueryChange={handleSearchQueryChange} onSearch={handleMovieSearch} />
          {error && <FallbackUI />}
          {isLoading ? <Loader /> : <MoviesList movies={foundMovies} />}
      </Container>
    </section>
  )
};

export default MoviesPage;