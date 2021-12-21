import PropTypes from "prop-types";
function Card({ children }) {
  console.log(children);
  return {
    children,
  };
}

export default Card;
