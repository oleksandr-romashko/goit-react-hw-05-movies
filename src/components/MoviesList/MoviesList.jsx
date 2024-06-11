import { Link } from "react-router-dom";
import css from "./MoviesList.module.css";

const MoviesList = ({movies}) => {
  if (!movies || movies.length === 0) {
      return "Sorry, no movies found."
  }

  return (
    <ul className={css["movies-list"]}>
      {console.log('movies :>> ', movies)}
      {movies.map(({id, title, release_date: releaseDate}) => {
        const releaseYear = releaseDate && new Date(releaseDate).getFullYear();
        return (
          <li key={id}>
            <Link className={css["movie-item-link"]} to={`/movies/${id}`}>{title} {releaseDate && `(${releaseYear})`}</Link>
          </li>
          );
        })
      }
    </ul>
  )
}

export default MoviesList