import PropTypes from "prop-types";

const Paragraphs = ({content}) => {
    return (
        <p style={{
            textDecoration: "none",
            textAlign: "justify",
            fontWeight: 600,
            fontSize: "15px",
        }}>
            {content}
        </p>
    );
};

Paragraphs.propTypes = {
    content: PropTypes.string.isRequired
}
export default Paragraphs;