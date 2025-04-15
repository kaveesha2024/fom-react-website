import NavigationBar from "../../NavBar/NavigationBar.jsx";
import picture1 from "../../../../public/jpg/services1.jpg";
import Banner from "../../re-usable/BannerSection/Banner.jsx";
import Body from "./body/Body.jsx";
import Footer from "../../footer/Footer.jsx";

const Service = () => {
    return (
        <div>
            <NavigationBar />
            <Banner
                picture={picture1}
                heroSectionHeading="Prevention and reversal of Non-Communicable Diseases (NCDs) through lifestyle interventions."
            />
            <Body />
            <Footer />
        </div>
    );
};

export default Service;