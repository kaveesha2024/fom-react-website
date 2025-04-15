import { Route, Routes } from "react-router";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import WhoWeAre from "./components/about/whoWeAre/WhoWeAre.jsx";
import OurMission from "./components/about/ourMission/OurMission.jsx";
import WhyItMatters from "./components/about/whyItMatters/WhyItMatters.jsx";
import WhatWeOffer from "./components/about/whatWeOffer/WhatWeOffer.jsx";
import OurFacilities from "./components/about/OurFacilities/OurFacilities.jsx";
import Service from "./components/service/home/Service.jsx";
import HealthNcdRiskScreening
	from "./components/service/home/body/Health-&-NCD-Risk-Screening/Health&NcdRiskScreening.jsx";
import LifestyleNutritionInterventions
	from "./components/service/home/body/Lifestyle-&-Nutrition-Interventions/Lifestyle&NutritionInterventions.jsx";
import EducationCounseling from "./components/service/home/body/Education-&-Counseling/Education&Counseling.jsx";
import ServicesSection from "./components/service/home/body/ServicesSection/ServicesSection.jsx";
import ResearchFacilitation from "./components/service/home/body/ResearchFacilitation/ResearchFacilitation.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}  />
			<Route path="/about" element={<About />}  />
			<Route path="/about/who-we-are" element={<WhoWeAre />}  />
			<Route path="/about/our-mission" element={<OurMission />}  />
			<Route path="/about/why-it-matters" element={<WhyItMatters />}  />
			<Route path="/about/what-we-offer" element={<WhatWeOffer />}  />
			<Route path="/about/collaborations" element={<OurFacilities />}  />
			<Route path="/services" element={<Service />}  />
			<Route path="/services/health-&-ncd-risk-screening" element={<HealthNcdRiskScreening />}  />
			<Route path="/services/lifestyle-&-nutrition-interventions" element={<LifestyleNutritionInterventions />}  />
			<Route path="/services/education-&-counseling" element={<EducationCounseling />}  />
			<Route path="/services/services-section" element={<ServicesSection />}  />
			<Route path="/services/research-facilitation" element={<ResearchFacilitation />}  />
		</Routes>
	);
};
export default App;