import Header from "../Components/Header";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Connect from "../Components/Connect";
import Educationexperience from "../Components/EducationExperience";
import BreakComponent from "../Components/BreakComponent";
import Footer from "../Components/Footer";
import Landing from "../Components/Landing";

export default function Main() {
    return (
        <div>
            <Header/>
            <Landing />
            {/* <AutoCarousel/> */}
            <Projects />
            <BreakComponent />
            <Educationexperience />
            <BreakComponent />
            <Skills />
            <BreakComponent />
            <Connect />
            <Footer />
        </div>
    );
}
