import { useEffect } from "react";
import NavBarWhiteTheme from "../../../../NavBar/whiteTheme/NavBarWhiteTheme.jsx";
import SecondaryCard from "../re-usable/secondaryCard/SecondaryCard.jsx";
import picture from "../../../../../../public/jpg/EducationCounseling.jpg";
import Footer from "../../../../footer/Footer.jsx";

const EducationCounseling = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <NavBarWhiteTheme />
      <SecondaryCard
        title="Education & Counseling"
        content="We offer personalized and group-based counseling sessions to help individuals understand the impact of their lifestyle choices on their health. Our education programs cover nutrition, physical activity, stress management, and mental well-being. The clinic also provides educational workshops and printed/online materials to raise awareness and empower individuals with the knowledge needed to make informed lifestyle changes. Counseling is available for people of all ages, including those already diagnosed with NCDs."
        img={picture}
      />
      <Footer />
    </div>
  );
};

export default EducationCounseling;
