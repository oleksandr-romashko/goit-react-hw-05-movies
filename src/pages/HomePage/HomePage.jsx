import { Container, FallbackUI, Loader, MoviesList } from "components";
import css from "./HomPage.module.css";
import api from "services/api";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getTrendingMovies = () => {
      setIsLoading(true);
      setError(null);
      api.getTrendingMovies()
        .then(trendingMovies => {
          setTrendingMovies(trendingMovies);
        })
        .catch(error => {
          setError(error);
          console.log(error);
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