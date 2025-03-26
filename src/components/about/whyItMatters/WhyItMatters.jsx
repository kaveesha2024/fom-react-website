import NavBarWhiteTheme from "../../NavBar/whiteTheme/NavBarWhiteTheme.jsx";
import picture from "../../../../public/jpg/whyItMatters1.jpg";
import WhyITPost1 from "../../re-usable/post/whyItMatterPost/post1/WhyITPost1.jsx";
import WhyITPost2 from "../../re-usable/post/whyItMatterPost/post2/WhyITPost2.jsx";
import picture2 from "../../../../public/jpg/WhyItMatters2.jpg";
import WhyITPost3 from "../../re-usable/post/whyItMatterPost/post3/WhyITPost3.jsx";
import WhyITPost4 from "../../../../public/jpg/whyitMatters4.jpg";
import unhealthyPicture from "../../../../public/jpg/unhealthyPicture1.jpg";
import preventionPicture from "../../../../public/jpg/prevention1.jpg";
import { useEffect } from "react";
import Footer from "../../footer/Footer.jsx";

const WhyItMatters = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBarWhiteTheme />
      <div>
        <WhyITPost1
          header="Why It Matters?"
          content="Non-communicable diseases (NCDs) such as diabetes, heart disease,
                   stroke, and obesity are among the leading causes of death and
                   disability worldwide. These conditions are largely driven by
                   unhealthy lifestyles, including poor diet, physical inactivity,
                   chronic stress, and insufficient sleep."
          picture={picture}
        />
      </div>
      <div>
        <WhyITPost2
          header="The Growing Health Crisis"
          picture={picture2}
          content="Sri Lanka, like many other countries, faces the triple burden of malnutrition:"
          para1="✔ Undernutrition – "
          span1="Affecting children and underprivileged communities"
          para2="✔ Overnutrition & Obesity – "
          span2="Rapidly increasing among adults and youth"
          para3="✔ Micronutrient Deficiencies – "
          span3="Leading to hidden hunger and long-term health risks"
          lastText="Lifestyle-related diseases place a heavy burden on healthcare systems and affect the quality of life of millions."
        />
      </div>
      <div>
        <WhyITPost3
          header="Insulin Resistance & Metabolic Syndrome"
          content="One of the biggest underlying causes of chronic diseases is insulin resistance. When the body becomes resistant to insulin, it struggles to regulate blood sugar levels, leading to conditions such as:"
          picture={WhyITPost4}
          para1="✔ Type 2 Diabetes – "
          span1=" Excess blood sugar damages nerves, kidneys, eyes, and the heart"
          para2="✔ Cardiovascular Diseases – "
          span2="High cholesterol and blood pressure increase the risk of strokes and heart attacks"
          para3="✔ Obesity & Fatty Liver Disease – "
          span3="Unhealthy weight gain and liver complications due to metabolic imbalances"
          lastText="Without intervention, these conditions can lead to life-threatening complications."
        />
      </div>
      <div>
        <WhyITPost2
          header="Unhealthy Diet & Sedentary Lifestyles"
          picture={unhealthyPicture}
          content="Modern lifestyles are characterized by:"
          para1="❌  High consumption of processed foods, sugar, and unhealthy fats"
          para2="❌  Physical inactivity"
          span2="due to prolonged screen time and lack of exercise"
          para3="❌ Chronic stress & poor sleep habits, "
          span3="disrupting hormone balance"
          lastText="These factors contribute to the rising prevalence of NCDs, making early intervention crucial."
        />
      </div>
      <div>
        <WhyITPost3
          header="Prevention is The Key"
          picture={preventionPicture}
          content="The good news is that lifestyle changes can prevent, manage, and even reverse many chronic conditions. Scientific studies show that:"
          para1="✅ A balanced diet "
          span1="improves metabolism and reduces inflammation"
          para2="✅ Regular physical activity "
          span2="lowers the risk of diabetes and heart disease"
          para3="✅ Stress management techniques "
          span3="enhance mental and physical well-being"
          lastText="Taking control of your health today can lead to a longer, healthier future!"
        />
      </div>
      <Footer backgroundColor />
    </div>
  );
};

export default WhyItMatters;
