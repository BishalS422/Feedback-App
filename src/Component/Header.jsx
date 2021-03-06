import PropTypes from "prop-types";

function Header({ bgColor, textColor, text }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    display: "flex",
    alighIteam: "center",
    justifyContent: "center",
    fontSize: "1rem",
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ffffff",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
