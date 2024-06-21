import PropTypes from "prop-types";
import css from "./Message.module.css";
import React from "react";

/**
 * Informational message wrapper component.
 * @param {string} props.text Informational text to display.
 * @param {string} [props.textAlign="center"] Optional text alignment. By default is center.
 * @param {string} props.marginTop Top margin value.
 * @returns {JSX.Element} Rendered informational message component.
 */
const Message = ({text, textAlign="center", marginTop}) => {
  return (
    <p 
      className={`${css["message-text"]} ${css[`align-${textAlign}`]}`} 
      style = {{ marginTop: marginTop }}
    >
      {text}
    </p>
  );
};

export default Message;

Message.propTypes = {
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
  marginTop: PropTypes.string,
};