import { useEffect, useState } from "react";
import { MoviesList, Container, Loader, FallbackUI } from "components";
import api from "services/api";
import css from "./HomPage.module.css";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getTrendingMovies = () => {
      setIsLoading(true);
      api.getTrendingMovies()
        .then(trendingMovies => {
          setTrendingMovies(trendingMovies);
        })
        .catch(error => {
          setError(error);
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false)
        });
    };

    getTrendingMovies();
  }, [])

  return (
    <section className={css["home"]}>
      <Container>
        <h1 className={css["page-title"]}>Trending today</h1>
        {error && <FallbackUI />}
        {isLoading ? <Loader /> : !error && <MoviesList movies={trendingMovies} />}
      </Container>
    </section>
  )
};

export default HomePage;