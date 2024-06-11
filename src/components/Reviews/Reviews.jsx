import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "components";
import api from "services/api";
import css from "./Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [userReviews, setUserRevies] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserRevies = () => {
      setIsLoading(true);
      api.getMovieReviewsById(movieId)
        .then(reviews => {
          setUserRevies(reviews);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false)
        });
    };
    
    getUserRevies();
  }, [movieId])

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {userReviews.length === 0 ? !isLoading && <p className={css["no-info-message"]}>We don't have any reviews for this movie.</p> :
        <ul className={css.list}>
          {userReviews.map(({id, author, content, created_at}) => (
            <li key={id} className={css.item}>
              <div className={css.details}><span className={css.author}>Author: {author}</span> on {new Date(created_at).toLocaleDateString()} at {new Date(created_at).toLocaleTimeString()}</div>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      }
    </>
  )
};

export default Reviews;