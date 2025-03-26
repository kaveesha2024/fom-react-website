import WhyITPost1 from "../../re-usable/post/whyItMatterPost/post1/WhyITPost1.jsx";
import picture from "../../../../public/jpg/whatWeoffer.jpg";
import WhyITPost2 from "../../re-usable/post/whyItMatterPost/post2/WhyITPost2.jsx";
import picture1 from "../../../../public/jpg/whatWeOffer1.jpg";
import picture2 from "../../../../public/jpg/whatWeoffer2.jpg";
import picture3 from "../../../../public/jpg/whatWeoffer3.jpg";
import picture4 from '../../../../public/jpg/whatWeoffer4.jpg';
import picture5 from '../../../../public/jpg/whatWeoffer5.jpg';
import Footer from "../../footer/Footer.jsx";
import WhyITPost3 from "../../re-usable/post/whyItMatterPost/post3/WhyITPost3.jsx";
import { useEffect } from "react";
import NavBarWhiteTheme from "../../NavBar/whiteTheme/NavBarWhiteTheme.jsx";

const WhatWeOffer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBarWhiteTheme />
      <WhyITPost1
        header="🌿 What We Offer"
        picture={picture}
        content="At the Lifestyle Counselling & Research Clinic,
         we provide scientifically-backed lifestyle interventions to help individuals prevent,
         manage, and even reverse non-communicable diseases (NCDs) such as diabetes,
         obesity, heart disease, and metabolic disorders."
        content2="Our approach is personalized, holistic,
        and evidence-based, focusing on nutrition, physical activity,
        mental well-being, and behavioral change to promote long-term health and wellness."
      />
      <WhyITPost2
        header="Lifestyle Assessment & Monitoring"
        picture={picture1}
        content="We begin with a comprehensive lifestyle assessment to identify health risks and improvement areas.
        This includes:"
        para1="✔ Dietary Habits: "
        span1="Evaluating your daily food intake, nutritional deficiencies,
        and unhealthy eating patterns."
        para2="✔ Physical Activity Levels: "
        span2="Assessing movement routines, sedentary behavior, and exercise frequency."
        para3="✔ Use of Toxic Substances: "
        span3="Identifying risk factors such as smoking and alcohol consumption."
        para4="✔ Mental & Environmental Health: "
        span4="Understanding stress levels, emotional well-being, and external lifestyle influences."
        lastText="Early detection helps in preventing and reversing chronic diseases before they become severe,
        ensuring a healthier future."
      />
      <WhyITPost3
        header="Personalized Lifestyle Counseling & Intervention Plans"
        picture={picture2}
        content="Each individual has different health needs,
        so we provide customized counseling and intervention plans.
        Our strategies include personalized nutrition plans, fitness recommendations,
        stress management techniques, and behavioral change support. We focus on achievable,
        science-based solutions that fit your lifestyle."
        para1="✔ Custom Nutrition Plans: "
        span1="Balanced, whole-food-based meal plans designed to improve health."
        para2="✔ Exercise & Movement Guidance: "
        span2="Fitness recommendations based on age, health status, and goals."
        para3="✔ Stress Management Techniques: "
        span3="Meditation, breathing exercises, and mindfulness strategies."
        para4="✔ Behavioral Modification Support: "
        span4="Strategies to help adopt and sustain healthy habits long-term."
        lastText="A personalized approach ensures sustainable changes that improve long-term health and quality of life."
      />
      <WhyITPost2
        header="Research & Innovation in Lifestyle Medicine"
        picture={picture3}
        content="Our clinic conducts scientific research to understand the impact of nutrition,
        exercise, and behavioral changes on chronic diseases. We collaborate with universities,
        healthcare professionals, and researchers to develop evidence-based interventions.
        Our research findings contribute to improving lifestyle medicine strategies globally."
        span1="📊 Conduct clinical studies on lifestyle factors affecting NCDs."
        span2="🎓 Facilitate undergraduate & postgraduate research in lifestyle medicine."
        span3="🤝 Collaborate with universities, healthcare professionals,
        and organizations to develop effective interventions."
        lastText="By continuously improving scientific knowledge,
        we create better solutions for preventing and managing non-communicable diseases (NCDs)."
      />
        <WhyITPost3
            header="Community Health & Awareness Programs"
            picture={picture4}
            content="We organize workshops, awareness campaigns,
            and group wellness programs to educate the public on healthy living.
            These programs focus on nutrition, fitness, mental well-being, and disease prevention.
            Our goal is to equip individuals with the right
            knowledge and practical tools to take charge of their health."
            para1="📢 Workshops & Seminars: "
            span1="Educational sessions on nutrition, fitness, and healthy habits."
            para2="🥗 Public Awareness Campaigns: "
            span2="Initiatives to promote better eating habits and lifestyle choices."
            para3="🏃‍♂️ Group Exercise & Wellness Programs: "
            span3="Physical activity sessions for individuals of all fitness levels."
            para4="💬 One-on-One & Group Counseling: "
            span4="Personalized guidance for those at risk of NCDs."
            lastText="Education and awareness drive healthier choices,
            helping communities reduce the burden of lifestyle diseases."
        />
        <WhyITPost2
            header="Cutting-Edge Facilities & Equipment"
            picture={picture5}
            content="Our clinic is equipped with advanced medical
            screening and wellness tools for accurate health tracking.
            We use body composition analyzers, fitness equipment, and smart technology for data-driven interventions.
            These resources support scientific diagnosis, lifestyle coaching, and research initiatives."
            para1="🔹 Body Composition Analyzers & Weighing Scales: "
            span1="To measure fat percentage, muscle mass, and metabolic health."
            para2="🔹 Exercise Mats, Gym Balls, and Resistance Bands: "
            span2="For guided fitness and rehabilitation exercises."
            para3="Smartboards & Multimedia Projectors: "
            span3="Used for educational workshops and presentations.git push"
            lastText="Access to high-quality facilities ensures that health recommendations are effective,
            measurable, and impactful."
        />
      <Footer />
    </div>
  );
};

export default WhatWeOffer;
