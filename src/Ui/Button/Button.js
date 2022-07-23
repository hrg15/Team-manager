import propTypes from "prop-types";
const Button = ({ text, onAdd }) => {
  return <button onClick={onAdd}>{text}</button>;
}; 

export default Button;
Button.propTypes = {
  text: propTypes.string,
  onAdd: propTypes.func,
};
