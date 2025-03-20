import { Link } from "react-router";
import PropTypes from "prop-types";

const NavButtons = ({ path, pathName }) => {
  return <Link style={{
      marginRight: "30px",
      color: "#FBE4D6",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: "17px",
  }} to={path}>{pathName}</Link>;
};

NavButtons.propTypes = {
    pathName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};
export default NavButtons;
