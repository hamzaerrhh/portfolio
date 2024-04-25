import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import PortFolio from "./PortFolio";
import Resume from "./Resume";
import Skills from "./Skills";

const PageContent = () => {
  return (
    <div id="content" className="content">
      <div className="content__wrapper">
        <Home />

        <PortFolio />
        <About />
        <Skills />

        <Resume />

        <Contact />
        {/* Contact Section End */}
      </div>
    </div>
  );
};
export default PageContent;
