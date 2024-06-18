import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader, Message } from "components";
import api from "services/api";
import noImage from "images/no-image.jpg";
import css from "./Cast.module.css";

const Cast = () => {
  const { movieId } = useParams();
  const [actorCast, setActorCast] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    };

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
  }, [movieId])

  if (isLoading) {
    return <Loader />;
  }

  if (actorCast) {
    if (actorCast.length === 0) {
      return <Message text="We don't have any information about actors cast for this movie." textAlign="left" />
    }

    return (
      <ul className={css["cast-list"]}>
        {actorCast.map(({id, profile_path, name, character}) => (
          <li key={id} className={css["cast-item"]}>
            <img 
              className={css["actor-image"]} 
              src={profile_path ? `${api.IMAGE_BASE_URL}${api.IMAGE_PROFILE_SIZE}${profile_path}` : noImage} 
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