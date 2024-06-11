import { useParams, Outlet } from "react-router-dom";
import { AdditionalInfo, Container } from "components";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import api from "services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const getMovieDetails = () => {
      setIsLoading(true);
      api.getMovieDetailsById(movieId)
        .then(trendingMovies => {
          setMovieDetails(trendingMovies);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false)
        });
    };
    
    getMovieDetails();
  }, [movieId])

  const {title, overview, poster_path, release_date, vote_average, genres} = movieDetails;
  const releaseYear = release_date && new Date(release_date).getFullYear();

  return (
    <>
      {console.log('movieDetails :>> ', movieDetails)}
      <section className={css["back-navigation"]}>
        <Container>
          <a className={css["back-navigation-link"]} href="./">Go back</a>
        </Container>
      </section>
      <section className={css["movie"]}>
        <Container>
          <div>
            <div className={css.details}>
              <img className={css["preview-image"]} src={`https://www.themoviedb.org/t/p/w1280${poster_path}`} alt="preview" />
              <div className={css.description}>
                <div>
                  <h1 className={css["movie-title"]}>{title} {releaseYear && `(${releaseYear})`}</h1>
                  <p>User Score: {Math.trunc(vote_average * 10)}%</p>
                </div>
                <div>
                  <h2 className={css["movie-subtitle"]}>Overview</h2>
                  <p>{overview}</p>
                </div>
                <div>
                  <h2 className={css["movie-subtitle"]}>Genres</h2>
                  <ul className={css["genres-list"]}>
                    {genres && genres.map(({name})=> (
                      <li key={name}>
                        <span>{name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <AdditionalInfo />
            <Outlet />
          </div>
        </Container>
      </section>
    </>
  )
};

export default MovieDetailsPage;