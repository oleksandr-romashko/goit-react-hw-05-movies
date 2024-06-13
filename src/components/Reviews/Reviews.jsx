import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader, Message } from "components";
import api from "services/api";
import css from "./Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [userReviews, setUserRevies] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserRevies = () => {
      setIsLoading(true);
      api.getMovieReviewsById(movieId)
        .then(reviews => {
          setUserRevies(reviews);
        })
        .catch(error => {
          console.error(error);
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

  if (userReviews && userReviews.results) {
    if (userReviews.results.length === 0) {
      return <Message text="We don't have any reviews for this movie." textAlign="left" />
    }
    
    return (
      <ul className={css.list}>
        {userReviews.results.map(({id, author, content, created_at}) => (
          <li key={id} className={css.item}>
            <div className={css["review-details"]}>
              <div className={css.author}>Author: {author}</div>
              <div className={css["date-time"]}>on {new Date(created_at).toLocaleDateString()} at {new Date(created_at).toLocaleTimeString()}
              </div>
            </div>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    )
  }
};

export default Reviews;