import { Suspense, useEffect, useState } from "react";
import { useParams, Outlet, Link, useLocation } from "react-router-dom";
import { AdditionalInfo, Container, Loader, FallbackUI } from "components";
import api from "services/api";
import noImage from "images/no-image.jpg";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
  
  }, [movieId]);

  useEffect(() => {
    if (!movieId) {
      return;
    };

    setIsLoading(true);
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
  }, [movieId])

  const backLink = location.state?.from ?? '/';
  const {title, overview, poster_path, release_date, vote_average, genres} = movieDetails;
  const releaseYear = release_date && new Date(release_date).getFullYear();
  const posterUrl = poster_path ? `${api.IMAGE_BASE_URL}${api.IMAGE_POSTER_SIZE}${poster_path}` : noImage;

  return (
    <>
      <section className={css["back-navigation"]}>
        <Container>
          <Link 
            className={css["back-navigation-link"]} 
            to={backLink}
          >
            Go back
          </Link>
        </Container>
      </section>
      {isLoading ? <Loader /> : 
        <section className={css["movie"]}>
          <Container>
            {error ? <FallbackUI /> :
              <div>
                <div className={css.details}>
                  <div className={css["preview-wrapper"]}>
                    <img 
                      className={css["preview-image"]} 
                      src={posterUrl} 
                      alt="poster" 
                      aria-label={`${title} preview`} 
                    />
                  </div>
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
                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
              </div>
            }
          </Container>
        </section>
      }
    </>
  )
};

export default MovieDetailsPage;