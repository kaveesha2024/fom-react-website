import Banner from "../re-usable/BannerSection/Banner.jsx";
import NavigationBar from "../NavBar/NavigationBar.jsx";
import homePicture from '../../../public/jpg/home.jpg';
import Footer from "../footer/Footer.jsx";

const Home = () => {
    return(
        <>
            <NavigationBar />
            <Banner picture={homePicture} heroSectionHeading="Department of Biochemistry, Faculty of Medicine, University of
            Ruhuna"/>
            <Footer />
        </>
    );
};
export default Home;