import PropTypes from "prop-types";

const WhyITPost1 = ({ content2, header, content, picture }) => {
  return (
    <div
      style={{
        width: "70%",
        height: "auto",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "150px",
      }}
    >
      <img
        style={{
          maxWidth: "50%",
          height: "auto",
        }}
        src={picture}
        alt="picture"
      />
      <div
        style={{
          // border: "1px solid #000",
          width: "100%",
          padding: "50px",
          // backgroundColor: "#7a6060",
          // color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h3
          style={{
            // color: "#ffffff",
            fontWeight: "bold",
            fontSize: "30px",
            color: "black",
            marginBottom: "3%",
          }}
        >
          {header}
        </h3>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          {content}
        </p>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          {content2}
        </p>
      </div>
    </div>
  );
};

WhyITPost1.propTypes = {
  content: PropTypes.string,
  header: PropTypes.string.isRequired,
  content2: PropTypes.string,
};
export default WhyITPost1;
