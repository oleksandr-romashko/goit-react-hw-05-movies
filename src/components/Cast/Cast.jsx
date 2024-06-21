import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { Loader, Message } from "components";
import api from "services/api";
import noImage from "images/no-image.jpg";
import css from "./Cast.module.css";

/**
 * Cast component with the list of actor cards related to the movie.
 * @returns {React.Component}
 */
const Cast = () => {
  // uses external state for one time load on mount
  const {cast: [actorCast, setActorCast]} = useOutletContext();

  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    };

    if(!actorCast) {
      setIsLoading(true);
    api.getMovieCastById(movieId)
      .then(cast => {
        setActorCast(cast);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false)
      });
    }
  }, [movieId, actorCast, setActorCast])

  if (isLoading) {
    return <Loader />;
  }

  if (actorCast) {
    // absent actors cast message
    if (actorCast.length === 0) {
      return (
        <Message 
          text="We don't have any information about actors cast for this movie." 
          textAlign="left" 
        />
      )
    }

    return (
      <ul className={css["cast-list"]}>
        {actorCast.map(({id, profile_path, name, character}) => (
          <li key={id} className={css["cast-item"]}>
            <img 
              className={css["actor-image"]} 
              src={
                profile_path 
                ? `${api.IMAGE_BASE_URL}${api.IMAGE_PROFILE_SIZE}${profile_path}` 
                : noImage
              } 
              alt="" 
              aria-label={`${name} portrait`} 
            />
            <div className={css.details}>
              <p className={css.name}>{name}</p>
              <div>
                <p className={css.character}>Character:</p>
                <p className={css.character}>{character}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }
};

export default Cast;