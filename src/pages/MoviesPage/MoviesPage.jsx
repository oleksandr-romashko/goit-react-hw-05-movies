import { useState } from "react";
import { Container, Loader, MoviesList, SearchForm } from "components";
import css from "./MoviesPage.module.css";
import api from "services/api";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query)
  }

  const handleMovieSearch = (event) => {
    event.preventDefault();
    const query = event.target.searchQuery.value;
    if(query) {
      setIsLoading(true);
      api.getMoviesByTitle(query)
        .then(foundMovies => {
          setFoundMovies(foundMovies);
        })
        .catch(error => {
          console.log(error);
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
          {isLoading ? <Loader /> : <MoviesList movies={foundMovies} />}
      </Container>
    </section>
  )
};

export default MoviesPage;