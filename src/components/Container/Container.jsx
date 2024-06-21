import PropTypes from "prop-types";
import css from "./Container.module.css";

/**
 * Simple adaptive container wrapper. 
 * @param {*} props.children Any children components. 
 * @returns 
 */
const Container = ({children}) => {
  return (
    <div className={css.container}>{children}</div>
  )
};

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
}