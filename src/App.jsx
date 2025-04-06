import { Route, Routes } from "react-router";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import WhoWeAre from "./components/about/whoWeAre/WhoWeAre.jsx";
import OurMission from "./components/about/ourMission/OurMission.jsx";
import WhyItMatters from "./components/about/whyItMatters/WhyItMatters.jsx";
import WhatWeOffer from "./components/about/whatWeOffer/WhatWeOffer.jsx";
import OurFacilities from "./components/about/OurFacilities/OurFacilities.jsx";

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
		</Routes>
	);
};
export default App;