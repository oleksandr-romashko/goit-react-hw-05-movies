import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { FallbackUI, Loader, Message, Pagination } from "components";
import api from "services/api";
import css from "./Reviews.module.css";

const FUNCTIONALITY_SHOW_LESS = process.env.REACT_APP_FUNC_SHOW_LESS.toLowerCase() === "true";

const MESSAGE_NO_REVIEWS = "We have no reviews for this movie.";
const MESSAGE_NO_MORE_REVIEWS = "We have no more reviews for this movie.";

/**
 * User reviews component.
 * Shows the list of user reviews related to the specific movie. 
 * @returns {JSX.Element} Rendered reviews component.
 */
const Reviews = () => {
  // uses external state
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
        // initially requests user reviews
        // then each time checks if there are any reviews update
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

    /**
     * Assign class to the element upon review unfold.
     * Supports both "only show more" and "show more / show less" function.
     * @param {React.SyntheticEvent} event Occurred event. 
     */
    const handleReviewClick = (event) => {
      if (event.target.nodeName === "BUTTON") {
        const btnEl = event.target;
        const itemEl = btnEl.closest(`.${css.item}`);
        if (itemEl.classList.contains('js-opened')) {
          btnEl.textContent = "Show more";
          itemEl.classList.remove('js-opened');
        } else {
          btnEl.textContent = "Show less";
          itemEl.classList.add('js-opened');
        }
      }
    }

    return (
      <>
        <ul
          className={`${css.list} ${FUNCTIONALITY_SHOW_LESS ? "func-show-less" : ""}`} 
          onClick={handleReviewClick}
        >
          {userReviews.results.map(({id, author, content, created_at}) => (
            <li key={id} className={`${css.item} truncate`}>
              <div className={css["review-details"]}>
                <span className={css.author}>Author: {author}</span>
                <span className={css["date-time"]}>
                  on {new Date(created_at).toDateString()}
                  &nbsp;at {new Date(created_at).toLocaleTimeString()}
                </span>
              </div>
              <p className={css["review-text"]}>{content}</p>
              <button 
                className={css["show-btn"]} 
                type="button"
              >
                Show more
              </button>
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