import whoWeArePicture from "../../../../../public/jpg/whoWeAre.jpg";
import Button from "../../button/Button.jsx";
import { useNavigate } from "react-router";
import Paragraphs from "./Paragraphs.jsx";
import SpanPart from "./SpanPart.jsx";
import PropTypes from "prop-types";

const ReadMoreCard = ({ title, content1, content2, para1, span1, para2, span2, span3, para3, para4, span4, para5, span5 }) => {
  const navigate = useNavigate();
  const backToAbout = () => {
    navigate("/About");
  };

  return (
    <div
      style={{
        background: "#0C0950",
      }}
    >
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          padding: "2% 0",
        }}
      >
        <div
          style={{
            margin: "0 5% 0 0",
          }}
        >
          <img src={whoWeArePicture} alt="picture" />{" "}
        </div>
        <div
          style={{
            background: "white",

            border: "1px solid black",
            padding: "5%",
          }}
        >
          <div
            style={{
              margin: "0 0 30px 0",
            }}
          >
            <h3
              style={{
                textDecoration: "none",
                textAlign: "start",
                fontWeight: 700,
                fontSize: "2rem",
                color: "#0C0950",
              }}
            >
              {title}
            </h3>
          </div>
          <div>
            <Paragraphs content={content1} />
            <Paragraphs content={content2} />
            <SpanPart
              para={para1}
              span={span1}
            />
            <SpanPart
              para={para2}
              span={span2}
            />
            <SpanPart
              para={para3}
              span={span3}
            />
            <SpanPart
              para={para4}
              span={span4}
            />
            <SpanPart
              para={para5}
              span={span5}
            />
          </div>
          <div>
            <Button type="button" onClick={backToAbout} buttonName="Back" />
          </div>
        </div>
      </div>
    </div>
  );
};

ReadMoreCard.propTypes = {
  title: PropTypes.string.isRequired,
  content1: PropTypes.string,
  content2: PropTypes.string,
  para1:PropTypes.string,
  span1:PropTypes.string,
  para2:PropTypes.string,
  span2:PropTypes.string,
  span3:PropTypes.string,
  para3:PropTypes.string,
  para4:PropTypes.string,
  span4:PropTypes.string,
  span5:PropTypes.string,
  para5:PropTypes.string,
}
export default ReadMoreCard;
