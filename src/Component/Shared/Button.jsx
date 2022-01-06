import React from "react";
import PropTypes from "prop-types";

import "../../StyleSheet/Button.css";
function Button({ children, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className="buttonShare">
      {children}
    </button>
  );
}
Button.defaultProps = {
  types: "button",
  isDisabled: true,
};
Button.prototype = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
