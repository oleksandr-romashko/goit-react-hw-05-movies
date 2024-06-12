import { useParams, Outlet, Link } from "react-router-dom";
import { AdditionalInfo, Container, FallbackUI, Loader } from "components";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import api from "services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getMovieDetails = () => {
      setIsLoading(true);
      setError(null);
      api.getMovieDetailsById(movieId)
        .then(movie => {
          if (movie.adult) {
            throw new Error("Unsupported type of content.")
          }
          setMovieDetails(movie);
        })
        .catch(error => {
          setError(error);
          console.error(error);
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
          <Link className={css["back-navigation-link"]} to="/movies">Go back</Link>
        </Container>
      </section>
      {isLoading ? <Loader /> : 
        <section className={css["movie"]}>
          <Container>
            {error ? <FallbackUI /> :
              <div>
                <div className={css.details}>
                  <img className={css["preview-image"]} src={`https://www.themoviedb.org/t/p/w1280${poster_path}`} alt="" aria-label={`${title} preview`} />
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
            }
          </Container>
        </section>
      }
    </>
  )
};

export default MovieDetailsPage;