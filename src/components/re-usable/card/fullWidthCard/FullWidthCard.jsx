import PropTypes from "prop-types";
import {Link} from "react-router";

const FullWidthCard = ({topic, content, readMorePath}) => {
  return (
    <div style={{
        background: '#FBE4D6',
    }}>
        <div
            style={{
                width: "70%",
                margin: "auto",
                marginTop: "5%",
                padding: "5% 0 0",
                background: "#FBE4D6"
            }}
        >
            <div style={{
                display: "flex",
                background: "#FBE4D6",
                justifyContent: "center",
            }}>
                <h3 style={{
                    fontWeight: 800,
                    fontSize: "2rem",
                    marginBottom: "3%",
                    color: "#0C0950",
                }}>{topic}</h3>
            </div>
            <div style={{
                display: "flex",
                textAlign: "justify",
                marginBottom: "0",
                paddingBottom: "50px",
            }}>
                <p>
                    {content}
                </p>
            </div>
            <Link style={{
                textDecoration: "none",
                color: "#0C0950",
                cursor: "pointer",
            }} to={readMorePath}>Read More ...</Link>
        </div>
    </div>
  );
};
FullWidthCard.propTypes = {
    topic: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    readMorePath: PropTypes.string,
}
export default FullWidthCard;
