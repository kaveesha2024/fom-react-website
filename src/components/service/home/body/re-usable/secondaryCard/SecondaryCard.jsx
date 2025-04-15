import "./secondaryCard.css";
import PropTypes from "prop-types";
const SecondaryCard = ({ img, title, content }) => {
  return (
    <div className="service-detail-container">
      <div className="service-card">
        <img src={img} alt="Health Screening" className="service-image" />
        <div className="service-content">
          <h1>{title}</h1>
          <p>
              {content}
          </p>
        </div>
      </div>
    </div>
  );
};
SecondaryCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}
export default SecondaryCard;
