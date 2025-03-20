import NavigationBar from "../NavBar/NavigationBar.jsx";
import Banner from "../re-usable/BannerSection/Banner.jsx";
import aboutBanner from "../../../public/jpg/home2.jpg";
import FullWidthCard from "../re-usable/card/fullWidthCard/FullWidthCard.jsx";
const About = () => {
  return (
    <div
      style={{
        background: "#0C0950",
      }}
    >
      <NavigationBar />
      <Banner
        picture={aboutBanner}
        heroSectionHeading="Empowering Health Through Lifestyle Changes"
      />
      <FullWidthCard
        topic="About Us"
        readMorePath="/about/who-we-are"
        content="The Lifestyle Counselling & Research Clinic is a specialized center
                    under the Department of Biochemistry, Faculty of Medicine, University
                    of Ruhuna. Our mission is to promote evidence-based lifestyle
                    interventions to prevent, manage, and even reverse non-communicable
                    diseases (NCDs) such as diabetes, obesity, and heart disease. Sri
                    Lanka, like many other nations, faces the triple burden of
                    malnutrition, including undernutrition, obesity, and micronutrient
                    deficiencies. At our clinic, we focus on scientifically backed
                    lifestyle modifications to empower individuals to take control of
                    their health and improve their quality of life. Our approach
                    integrates nutrition, physical activity, stress management, and
                    behavioral counseling, ensuring a holistic and sustainable path to
                    better health. Whether you are looking to prevent chronic diseases,
                    optimize your diet, or adopt a healthier lifestyle, we are here to
                    guide you with personalized support and expert advice."
      />
      <FullWidthCard
        topic="Our Mission"
        readMorePath="/about/our-mission"
        content="At the Lifestyle Counselling & Research Clinic,
        our mission is to promote health and well-being through evidence-based lifestyle interventions that prevent,
        manage, and reverse non-communicable diseases (NCDs). We are committed to using a science-based approach,
        relying on the latest research to develop effective nutrition and lifestyle strategies.
        Every individual receives personalized care,
        with tailored guidance that aligns with their unique health needs and goals. Our focus is on holistic wellness,
         integrating physical health, mental well-being, and balanced nutrition to create long-term,
         sustainable health improvements.
         We believe in education and awareness, empowering individuals with knowledge to make informed,
         healthier choices in their daily lives. Through continuous innovation and research,
          we work towards advancing lifestyle medicine, contributing to a healthier society with lasting benefits."
      />
      <FullWidthCard
        topic="Why It Matters"
        readMorePath="/about/why-it-matters"
        content="The rising prevalence of non-communicable diseases (NCDs) such as diabetes,
        heart disease, metabolic syndrome, and certain cancers is directly linked to poor lifestyle choices,
        including unhealthy diets, sedentary habits, stress, and lack of proper sleep. Insulin resistance,
         a key precursor to type 2 diabetes and metabolic disorders,
         is strongly associated with obesity and poor nutrition.
         Many individuals unknowingly increase their risk of NCDs by consuming highly processed foods,
          excessive sugars, and unhealthy fats, combined with a lack of physical activity and chronic stress,
           all of which contribute to inflammation and hormonal imbalances. By adopting early lifestyle modifications,
           such as incorporating whole, nutrient-dense foods, engaging in regular exercise, managing stress,
           and maintaining restorative sleep,
            individuals can significantly reduce their risk of chronic diseases and even reverse certain
            conditions before they require pharmaceutical intervention. This holistic approach not only improves
             overall health and longevity but also reduces healthcare costs, enhances mental well-being, and fosters
             a sustainable, healthier future for communities."
      />
    </div>
  );
};

export default About;
