import NavigationBar from "../../NavBar/NavigationBar.jsx";
import ReadMoreCard from "../../re-usable/card/readmoreCards/ReadMoreCard.jsx";

const WhoWeAre = () => {
  return (
    <div>
      <NavigationBar />
      <ReadMoreCard
        title="Who We Are"
        content1="The Lifestyle Counselling & Research Clinic is a dedicated center
            under the Department of Biochemistry, Faculty of Medicine,
            University of Ruhuna, focused on preventing, managing, and reversing
            non-communicable diseases (NCDs) through lifestyle modifications."
        content2="We address the triple burden of malnutrition (undernutrition,
              obesity, and micronutrient deficiencies) and promote scientifically
              backed interventions for long-term health improvements."
        para1="Founded by: "
        span1="Prof. C.M. Wickramatilake, Lifestyle Medicine Physician."
        para2="Backed by: "
        span2="Leading experts in biochemistry, nutrition, sports medicine, and
                psychology."
        para3="Serving: "
        span3="Individuals at risk of NCDs and those seeking healthier
                lifestyle changes."
      />
    </div>
  );
};

export default WhoWeAre;
