import PropTypes from "prop-types";
import "../../StyleSheet/Card.css";
function Card({ children }) {
  return <div className="card">{children}</div>;
}
Card.PropsType = {
  children: PropTypes.node.isRequired,
};

export default Card;
