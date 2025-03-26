import PropTypes from "prop-types";

const WhyITPost1 = ({
  header,
  content,
  picture,
  para1,
  span1,
  para2,
  span2,
  para3,
  span3,
    para4,
    span4,
  lastText,
}) => {
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
            marginBottom: "5%",
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
          <p
            style={{
              color: "black",
            }}
          >
            {para1}{" "}
            <span
              style={{
                color: "#777373",
              }}
            >
              {span1}
            </span>
          </p>
          <p
            style={{
              color: "black",
            }}
          >
            {para2}{" "}
            <span
              style={{
                color: "#777373",
              }}
            >
              {span2}
            </span>
          </p>
          <p
            style={{
              color: "black",
            }}
          >
            {para3}{" "}
            <span
              style={{
                color: "#777373",
              }}
            >
              {span3}
            </span>
          </p>

          <p
            style={{
              color: "black",
            }}
          >
            {para4}{" "}
            <span
              style={{
                color: "#777373",
              }}
            >
              {span4}
            </span>
          </p>
        </div>
        <p>{lastText}</p>
      </div>
      <img
        style={{
          maxWidth: "50%",
          height: "auto",
        }}
        src={picture}
        alt="picture"
      />
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
  para4: PropTypes.string,
  span4: PropTypes.string,
  lastText: PropTypes.string,
};
export default WhyITPost1;
