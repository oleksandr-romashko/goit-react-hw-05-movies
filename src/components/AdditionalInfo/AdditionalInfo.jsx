import { NavLink, useLocation } from "react-router-dom";
import css from "./AdditionalInfo.module.css";

/**
 * Component containing links to obtain additional movie information.
 * @returns {JSX.Element} Rendered component with links to additional information.
 */
const AdditionalInfo = () => {
  const location = useLocation();
  return (
    <div className={css["additional-info"]}>
      <p>Additional info</p>
      <div className={css.options}>
        <NavLink className={css.option} to="cast" state={{ from: location }}>
          Cast
        </NavLink>
        <NavLink className={css.option} to="reviews" state={{ from: location }}>
          Reviews
        </NavLink>
      </div>
    </div>
  )
};

export default AdditionalInfo;