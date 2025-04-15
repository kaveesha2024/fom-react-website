import {useEffect} from "react";
import NavBarWhiteTheme from "../../../../NavBar/whiteTheme/NavBarWhiteTheme.jsx";
import SecondaryCard from "../re-usable/secondaryCard/SecondaryCard.jsx";
import picture from "../../../../../../public/jpg/ServicesSection.jpg";
import Footer from "../../../../footer/Footer.jsx";

const ServicesSection = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <div>
            <NavBarWhiteTheme />
            <SecondaryCard
                title="Training & Capacity Building"
                content="We facilitate training programs for healthcare professionals, educators, and community leaders to build capacity in the field of lifestyle medicine. These training sessions include up-to-date evidence, practical skills, and intervention strategies to improve community health outcomes. Undergraduate and postgraduate students are also encouraged to participate in these programs to gain exposure and build foundational knowledge in preventive medicine and public health nutrition."
                img={picture}
            />
            <Footer />
        </div>
    );
};

export default ServicesSection;