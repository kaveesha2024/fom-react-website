import {useEffect} from "react";
import NavBarWhiteTheme from "../../../../NavBar/whiteTheme/NavBarWhiteTheme.jsx";
import SecondaryCard from "../re-usable/secondaryCard/SecondaryCard.jsx";
import picture from "../../../../../../public/jpg/Research Facilitation.jpg";
import Footer from "../../../../footer/Footer.jsx";

const ResearchFacilitation = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <div>
            <NavBarWhiteTheme />
            <SecondaryCard
                title="Research Facilitation"
                content="As part of our academic commitment, the clinic provides opportunities for undergraduate and postgraduate research in lifestyle medicine. We support studies that explore local nutritional challenges, cultural practices, intervention outcomes, and behavioral health trends. The clinic collaborates with universities and scientific advisors to fill research gaps and contribute to the national and international knowledge base in the field. Research findings are also used to refine our services and design effective interventions."
                img={picture}
            />
            <Footer />
        </div>
    );
};

export default ResearchFacilitation;