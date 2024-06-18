import { Link, useLocation } from "react-router-dom";
import { Message } from "components";
import css from "./MoviesList.module.css";

const MoviesList = ({movies}) => {
  const location = useLocation();

  if (!movies) {
    return null;
  }

  if (movies && movies.length === 0) {
    return <Message text="We apologize, but we couldn't find any movies matching your request." textAlign="center" />;
  }

  return (
    <ul className={css["movies-list"]}>
      {movies.map(({id, title, release_date: releaseDate}) => {
        const releaseYear = releaseDate && new Date(releaseDate).getFullYear();
        return (
            <li key={id}>
              <Link 
                className={css["movie-item-link"]} 
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title}&nbsp;{releaseDate && `(${releaseYear})`}
              </Link>
            </li>
          );
        })
      }
    </ul>
  )
}

export default MoviesList