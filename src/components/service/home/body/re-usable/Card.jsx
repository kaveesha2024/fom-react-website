import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router";

const Card = ({ title, content, path }) => {
  return (
    <div className="services-section">
        <Link to={path} ><h2 className="services-subheading">{title}</h2></Link>
      <p className="services-paragraph">
          {content}
      </p>
    </div>
  );
};
Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}
export default Card;
