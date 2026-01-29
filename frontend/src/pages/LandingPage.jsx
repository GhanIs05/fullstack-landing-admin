import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <div id="home"><Hero /></div>
      <div id="why"><WhyChooseUs /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="clients"><Clients /></div>
      <div id="contact"><ContactForm /></div>
      <Newsletter />
    </>
  );
};

export default LandingPage;
