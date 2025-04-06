import NavBarWhiteTheme from "../../NavBar/whiteTheme/NavBarWhiteTheme.jsx";
import picture from "../../../../public/jpg/whatWeoffer.jpg";
import WhyITPost1 from "../../re-usable/post/whyItMatterPost/post1/WhyITPost1.jsx";
import Footer from "../../footer/Footer.jsx";
import WhyITPost2 from "../../re-usable/post/whyItMatterPost/post2/WhyITPost2.jsx";
import WhyITPost3 from "../../re-usable/post/whyItMatterPost/post3/WhyITPost3.jsx";
import {useEffect} from "react";

const OurFacilities = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <NavBarWhiteTheme />
      <WhyITPost1
        header="🤝 Collaborations & Partnerships"
        picture={picture}
        content="At the Lifestyle Counselling & Research Clinic,
         we believe that collaborative efforts are essential to
         improving public health and addressing the growing burden
         of non-communicable diseases (NCDs).
         Through strong partnerships with universities,
         healthcare professionals, researchers,
         and national & international organizations,
         we aim to drive evidence-based solutions for better nutrition and healthier lifestyles."
      />
      <WhyITPost2
        header="🏥 Academic & Research Collaborations"
        content="We actively collaborate with leading universities and institutions to
          conduct cutting-edge research in lifestyle medicine, nutrition,
          and metabolic health. Our research helps develop innovative,
          culturally appropriate interventions for disease prevention and management."
        para1="✔ University of Ruhuna – "
        span1="Faculty of Medicine (Host institution)"
        para2="✔ University of Peradeniya – "
        span2="Department of Food Science & Technology"
        para3="✔ Wayamba University of Sri Lanka – "
        span3="Department of Applied Nutrition"
        para4="✔ Institute of Sports Medicine – "
        span4="Colombo"
        para5="✔ National & international public health research initiatives"
        lastText="Through these collaborations,
         we offer undergraduate and postgraduate research opportunities,
         promoting scientific advancements in nutrition and lifestyle medicine."
        picture={picture}
      />
      <WhyITPost3
        header="👩‍⚕️ Healthcare Partnerships"
        picture={picture}
        content="We work closely with medical professionals and
        specialists in various fields to ensure that our lifestyle
        interventions are scientifically validated and tailored to meet individual needs."
        para1="🔹 Endocrinologists & Diabetologists – "
        span1="Experts in insulin resistance, diabetes, and metabolic health"
        para2="🔹 Cardiologists & Internal Medicine Specialists – "
        span2="Addressing heart disease & hypertension"
        para3="🔹 Nutritionists & Dietitians – "
        span3="Providing personalized meal planning and dietary guidance"
        para4="🔹 Clinical Psychologists – "
        span4="Supporting mental health, stress management, and behavior change"
        para5="🔹 Sports & Exercise Medicine Physicians – "
        span5="Promoting active lifestyles for disease prevention"
        lastText="Our multidisciplinary approach ensures that every patient
        receives comprehensive support in adopting sustainable lifestyle changes."
      />
      <WhyITPost2
        header="🌍 National & International Collaborations"
        picture={picture}
        content="We seek partnerships with public health organizations,
        NGOs, and global institutions to expand our outreach and maximize impact. We aim to:"
        para1="✔ Develop large-scale public health programs "
        span1="focused on NCD prevention"
        para2="✔ Conduct policy-driven research "
        span2="to influence national health strategies"
        para3="✔ Secure funding & grants "
        span3="for sustainable health initiatives"
        para4="✔ Host workshops, training programs, and community awareness campaigns"
        lastText="If you represent a university, medical institution,
        or public health organization,
        we invite you to join us in transforming lives through lifestyle medicine."
      />
      <Footer />
    </div>
  );
};

export default OurFacilities;
