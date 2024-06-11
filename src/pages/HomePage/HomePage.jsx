import { Container, Loader, MoviesList } from "components";
import css from "./HomPage.module.css";
import api from "services/api";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const getTrendingMovies = () => {
      setIsLoading(true);
      api.getTrendingMovies()
        .then(trendingMovies => {
          setTrendingMovies(trendingMovies);
        })
        .catch(error => {
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
        {isLoading ? <Loader /> : <MoviesList movies={trendingMovies} />}
      </Container>
    </section>
  )
};

export default HomePage;