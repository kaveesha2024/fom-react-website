import PropTypes from "prop-types";

const ParaAndSpan = ({para, span}) => {
    return (
        <p>{para}<span>{span}</span></p>
    );
};

ParaAndSpan.propTypes = {
    para: PropTypes.string,
    span: PropTypes.string,
}
export default ParaAndSpan;