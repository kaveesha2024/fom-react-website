import PropTypes from "prop-types";
import ParaAndSpan from "../../../paraAndSpan/ParaAndSpan.jsx";

const WhyITPost1 = ({ header, content, picture, lastText, para1, span1, para2, span2, para3, span3 }) => {
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
        <div
          style={{
            marginLeft: "2%",
          }}
        >
          <ParaAndSpan
            para={para1}
            span={span1}
          />
          <ParaAndSpan
            para={para2}
            span={span2}
          />
          <ParaAndSpan
            para={para3}
            span={span3}
          />
        </div>
        <ParaAndSpan para={lastText} />
      </div>
    </div>
  );
};

WhyITPost1.propTypes = {
  content: PropTypes.string,
  header: PropTypes.string.isRequired,
    para1: PropTypes.string,
    span1: PropTypes.string,
    para2: PropTypes.string,
    span2: PropTypes.string,
    para3: PropTypes.string,
    span3: PropTypes.string,
    lastText: PropTypes.string,
};

export default WhyITPost1;
