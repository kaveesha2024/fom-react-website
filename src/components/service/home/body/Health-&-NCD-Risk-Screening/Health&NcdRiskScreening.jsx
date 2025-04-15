import SecondaryCard from "../re-usable/secondaryCard/SecondaryCard.jsx";
import picture from "../../../../../../public/jpg/HealthNcdRiskScreening.jpg";
import NavBarWhiteTheme from "../../../../NavBar/whiteTheme/NavBarWhiteTheme.jsx";
import Footer from "../../../../footer/Footer.jsx";
import {useEffect} from "react";

const HealthNcdRiskScreening = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    return (
        <div>
            <NavBarWhiteTheme />
            <SecondaryCard
                title="Health & NCD Risk Screening"
                content="We conduct comprehensive screenings to assess the risk of developing non-communicable diseases (NCDs) such as diabetes, cardiovascular disease, and metabolic syndrome. Our screening process includes measuring body composition, BMI, waist circumference, blood pressure, physical activity levels, dietary patterns, and lifestyle factors. This data helps identify early warning signs and at-risk individuals. Screening is available for both adults and children, enabling early intervention and prevention strategies tailored to individual needs."
                img={picture}
            />
            <Footer />
        </div>
    );
};

export default HealthNcdRiskScreening;