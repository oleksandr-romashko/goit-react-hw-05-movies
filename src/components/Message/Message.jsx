import css from "./Message.module.css";

const Message = ({text, textAlign="center"}) => {
  return (
    <p className={`${css["message-text"]} ${css[`align-${textAlign}`]}`}>{text}</p>
  );
};

export default Message;