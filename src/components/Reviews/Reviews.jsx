import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { FallbackUI, Loader, Message, Pagination } from "components";
import api from "services/api";
import css from "./Reviews.module.css";

const MESSAGE_NO_REVIEWS = "We have no reviews for this movie.";
const MESSAGE_NO_MORE_REVIEWS = "We have no more reviews for this movie.";

/**
 * User review component.
 * Shows user reviews related to the specific movie. 
 * @returns {React.Component}
 */
const Reviews = () => {
  const {userReviews: [userReviews, setUserReviews]} = useOutletContext()
  const {reviewPage: [page, setPage]} = useOutletContext();

  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    };

    setIsLoading(true);
    api.getMovieReviewsById(movieId, page)
      .then(reviews => {
        // initially checks for user reviews
        // then checks if there are reviews update
        console.log('reviews :>> ', reviews);
        console.log('userReviews :>> ', userReviews);
        if (
          !userReviews ||
          reviews.total_results !== userReviews.total_results ||
          reviews.page !== userReviews.page ||
          reviews.total_pages !== userReviews.total_pages
        ) {
            setUserReviews(reviews);
            setPage(reviews.page);
        }
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId, userReviews, page, setPage, setUserReviews]);

  if (isLoading) {
    return <Loader />;
  }

  if (userReviews && userReviews.results) {
    if (userReviews.results.length === 0) {
      return <Message text={MESSAGE_NO_REVIEWS} textAlign="left" />
    }

    return (
      <>
        <ul className={css.list}>
          {userReviews.results.map(({id, author, content, created_at}) => (
            <li key={id} className={css.item}>
              <div className={css["review-details"]}>
                <span className={css.author}>Author: {author}</span>
                <span className={css["date-time"]}>
                  on {new Date(created_at).toDateString()}
                  &nbsp;at {new Date(created_at).toLocaleTimeString()}
                </span>
              </div>
              <p>{content}</p>
            </li>
          ))}
        </ul>
        {userReviews.total_pages > 1 
          ? <Pagination 
              page={page} 
              total_pages={userReviews.total_pages} 
              onPageChange={setPage} 
            /> 
          : <Message text={MESSAGE_NO_MORE_REVIEWS} marginTop="24px" />
        }
      </>
    )
  } else {
    return <FallbackUI />
  }
};

export default Reviews;