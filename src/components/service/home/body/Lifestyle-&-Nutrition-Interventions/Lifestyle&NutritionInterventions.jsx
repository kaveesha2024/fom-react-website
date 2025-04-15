import { useEffect } from "react";
import NavBarWhiteTheme from "../../../../NavBar/whiteTheme/NavBarWhiteTheme.jsx";
import SecondaryCard from "../re-usable/secondaryCard/SecondaryCard.jsx";
import picture from "../../../../../../public/jpg/LifestyleNutritionInterventions.jpg";
import Footer from "../../../../footer/Footer.jsx";

const LifestyleNutritionInterventions = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <NavBarWhiteTheme />
      <SecondaryCard
        title="Lifestyle & Nutrition Interventions"
        content="Our team designs and implements evidence-based lifestyle and dietary interventions aimed at preventing and reversing chronic diseases. These interventions focus on promoting whole food, plant-based nutrition, increasing physical activity, improving sleep hygiene, and managing stress. Each intervention is customized based on individual assessments, taking into account personal preferences, health goals, and cultural background. We guide clients through achievable and sustainable lifestyle changes that support long-term well-being."
        img={picture}
      />
      <Footer />
    </div>
  );
};

export default LifestyleNutritionInterventions;
