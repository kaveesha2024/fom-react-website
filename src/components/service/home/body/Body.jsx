import React from "react";
import Card from "./re-usable/Card.jsx";

const Body = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>

      <Card
        title="Health & NCD Risk Screening"
        path="/services/health-&-ncd-risk-screening"
        content="We offer screening for children and adults to
         assess the risk of developing non-communicable diseases (NCDs) such as diabetes,
         hypertension, and cardiovascular conditions. Our evaluations include body composition,
         lifestyle assessments, and nutritional status to ensure early detection and intervention."
      />
      <Card
        title="Lifestyle & Nutrition Interventions"
        path="/services/lifestyle-&-nutrition-interventions"
        content="Our evidence-based programs are tailored to individual needs to
          improve dietary habits and physical activity. We design strategies to
          support long-term lifestyle changes that prevent and even reverse
          chronic diseases through meal planning, exercise routines, and stress
          management techniques."
      />
      <Card
        title="Education & Counseling"
        path="/services/education-&-counseling"
        content="Personalized lifestyle counseling sessions and group workshops are
          offered for all age groups. Our experts provide continuous guidance on
          improving nutrition, mental health, sleep hygiene, and physical
          fitness based on scientific research."
      />
      <Card
        title="services-section"
        path="/services/services-section"
        content="We support training programs for healthcare professionals, community
          workers, and students interested in lifestyle medicine. These sessions
          enhance skills in health promotion, data analysis, and implementation
          of sustainable wellness practices."
      />
      <Card
        title="Research Facilitation"
        path="/services/research-facilitation"
        content="We actively engage in and support undergraduate and postgraduate
          research on nutrition, lifestyle, and non-communicable diseases. Our
          clinic serves as a living lab for data collection, intervention
          studies, and community-focused health projects."
      />
    </div>
  );
};

export default Body;
