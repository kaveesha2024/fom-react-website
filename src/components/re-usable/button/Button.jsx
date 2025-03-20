import PropTypes from "prop-types";

const Button = ({ buttonName, onClick, type }) => {
  return (
    <div
      style={{
        display: "block",
        margin: "4% 0 0 0",
      }}
    >
      <button
        style={{
          padding: "10px 30px",
          border: "none",
          background: "#0C0950",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        type={type}
        onClick={onClick}
      >
        {buttonName}
      </button>
    </div>
  );
};
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default Button;
