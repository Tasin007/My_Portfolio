import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactMe from "./ContactMe";


const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <AboutMe></AboutMe>
           <Skills></Skills>
           <Projects></Projects>
           <ContactMe></ContactMe>
        </div>
    );
};

export default Home;