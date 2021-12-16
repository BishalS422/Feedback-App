import PropTypes from "prop-types";

function App({ bgColor, textColor, displatFlex, text, center }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
    display: displatFlex,
    alignItems: "center",
    justifyContent: center,
  };
  return (
    <div>
      <h1 style={headerStyle}>{text}</h1>
    </div>
  );
}
App.defaultProps = {
  text: "Feedback APP",
  bgColor: "#42968c",
  textColor: "#eef0f0",
  displatFlex: "flex",
  center: "center",
};

App.propTypes = {
  bgColor: PropTypes.string,
};

export default App;
