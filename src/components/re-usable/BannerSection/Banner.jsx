
import PropTypes from "prop-types";
const Banner = ({heroSectionHeading, picture}) => {
    return (
        <div className="swiper-container main-slider" id="myCarousel">
            <div className="swiper-wrapper">
                <div
                    className="swiper-slide slider-bg-position"
                    style={{
                        backgroundImage: `url(${picture}`
                    }}
                    data-hash="slide1"
                >
                    <h2>{heroSectionHeading}</h2>
                </div>
            </div>
        </div>

    );
};

Banner.propTypes = {
    heroSectionHeading: PropTypes.string,
}
export default Banner;