import { Route, Routes } from "react-router";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import WhoWeAre from "./components/about/whoWeAre/WhoWeAre.jsx";
import OurMission from "./components/about/ourMission/OurMission.jsx";
import WhyItMatters from "./components/about/whyItMatters/WhyItMatters.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}  />
			<Route path="/about" element={<About />}  />
			<Route path="/about/who-we-are" element={<WhoWeAre />}  />
			<Route path="/about/our-mission" element={<OurMission />}  />
			<Route path="/about/why-it-matters" element={<WhyItMatters />}  />
		</Routes>
	);
};
export default App;