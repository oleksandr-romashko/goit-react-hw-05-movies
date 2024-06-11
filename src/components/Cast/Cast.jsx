import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "components";
import api from "services/api";
import css from "./Cast.module.css";

const Cast = () => {
  const { movieId } = useParams();
  const [actorCast, setactorCast] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getActorCast = () => {
      setIsLoading(true);
      api.getMovieCastById(movieId)
        .then(cast => {
          setactorCast(cast);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false)
        });
    };
    
    getActorCast();
  }, [movieId])

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {actorCast.length === 0 
        ? !isLoading && <p className={css["no-info-message"]}>We don't have any information about actors cast for this movie.</p> 
        :
        <ul className={css["cast-list"]}>
          {actorCast.map(({id, profile_path, name, character}) => (
            <li key={id} className={css["cast-item"]}>
              <img className={css["actor-image"]} src={`https://www.themoviedb.org/t/p/w1280${profile_path}`} alt="" aria-label={`${name} portrait`} />
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
      }
    </>
  )
};

export default Cast;