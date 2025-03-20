import Banner from "../re-usable/BannerSection/Banner.jsx";
import NavigationBar from "../NavBar/NavigationBar.jsx";
import homePicture from '../../../public/jpg/home.jpg';

const Home = () => {
    return(
        <>
            <NavigationBar />
            <Banner picture={homePicture} heroSectionHeading="Department of Biochemistry, Faculty of Medicine, University of
            Ruhuna"/>
        </>
    );
};
export default Home;