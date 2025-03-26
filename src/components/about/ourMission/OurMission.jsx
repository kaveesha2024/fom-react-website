import NavigationBar from "../../NavBar/NavigationBar.jsx";
import ReadMoreCard from "../../re-usable/card/readmoreCards/ReadMoreCard.jsx";

const OurMission = () => {
  return (
    <div>
      <NavigationBar />
      <ReadMoreCard
        title="Our Mission"
        content1="Our goal is to create a healthier community by providing accessible,
        research-driven lifestyle interventions that enhance nutrition, physical activity,
        mental well-being, and disease prevention."
        para1="Identify and assess "
        span1="lifestyle-related health risks."
        para2="Provide tailored lifestyle counseling "
        span2="for sustainable health improvements."
        para3="Implement scientific interventions "
        span3="for disease prevention and reversal."
        para4="Facilitate research "
        span4="in lifestyle medicine to bridge knowledge gaps."
        para5="Collaborate with healthcare professionals, academics, and policymakers."
      />
    </div>
  );
};

export default OurMission;
