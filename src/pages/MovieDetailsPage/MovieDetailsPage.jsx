import { Suspense, useState, useEffect, useRef } from "react";
import { Link, Outlet, useParams, useLocation, Navigate } from "react-router-dom";
import { AdditionalInfo, Loader, Container, FallbackUI } from "components";
import api from "services/api";
import noImage from "images/no-image.jpg";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shouldNavigateHome, setShouldNavigateHome] = useState(false)

  useEffect(() => {
    if (!movieId) {
      return;
    };

    setIsLoading(true);
    api.getMovieDetailsById(movieId)
      .then(movie => {
        if (movie.adult) {
          setShouldNavigateHome(true);
          return;
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
  }, [movieId]);

  /**
   * Redirects to home page when specific condition met.
   * 
   * This variant instead of inline navigate("/") of useNavigate hook prevents 
   * parent rerender while using sub routes (as it is necessary to include 
   * navigate as a dependency in useEffect dependencies, 
   * which causes rerenders).
   */
  if (shouldNavigateHome) {
    return <Navigate to="/" />
  }

  /**
   * Prevents cases when back link matches current location and back link does not work.
   * Occurs when link to the movie was provided and browser back btn used.
   */
  if (location.pathname === backLink.current.pathname) {
    backLink.current = "/";
  }

  const {title, overview, poster_path, release_date, vote_average, genres} = movieDetails;
  const releaseYear = release_date && new Date(release_date).getFullYear();
  const posterUrl = poster_path ? `${api.IMAGE_BASE_URL}${api.IMAGE_POSTER_SIZE}${poster_path}` : noImage;

  return (
    <>
      <section className={css["back-navigation"]}>
        <Container>
          <Link 
            to={backLink.current}
            className={css["back-navigation-link"]} 
          >
            Go back
          </Link>
        </Container>
      </section>

      {isLoading ? <Loader /> : 
        <section className={css["movie"]}>
          <Container>
            {error ? <FallbackUI /> :
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
            }
          </Container>
        </section>
      }

      <section>
        <Container>
          <AdditionalInfo />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </section>
    </>
  )
};

export default MovieDetailsPage;