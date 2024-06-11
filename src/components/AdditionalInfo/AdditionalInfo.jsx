import { NavLink } from "react-router-dom";
import css from "./AdditionalInfo.module.css";

const AdditionalInfo = () => {
  return (
    <div className={css["additional-info"]}>
      <p>Additional info</p>
      <div className={css.options}>
        <NavLink className={css.option} to="cast">Cast</NavLink>
        <NavLink className={css.option} to="reviews">Reviews</NavLink>
      </div>
    </div>
  )
};

export default AdditionalInfo;