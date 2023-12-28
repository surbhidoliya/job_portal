import '../css/App.css';
import JobList from "../components/JobList";
import HomePageHeader from "../components/HomePageHeader";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <>
            <HomePageHeader/>
            <JobList/>
            <Testimonials/>
            <Features/>
            <Footer/>
        </>
    );
}

export default HomePage
