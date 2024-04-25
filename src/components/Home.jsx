import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <>
      <section id="home" className="main intro">
        {/* Headline Start */}
        <div
          id="headline"
          className="headline d-flex align-items-start flex-column"
        >
          <p className="headline__subtitle animate-headline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="13px"
              height="13px"
              viewBox="0 0 13 13"
              fill="currentColor"
            >
              <path
                fill="currentColor"
                d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
            C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
            C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
              />
            </svg>
            <span>Let's meet!</span>
          </p>
          <h1 className="headline__title animate-headline">
            I'm Hamza Errabbane
          </h1>
          <div className="headline__btnholder d-flex flex-column flex-sm-row">
            <a
              className="btn mobile-vertical btn-default btn-hover btn-hover-accent-mobile animate-headline"
              href="#project"
            >
              <span className="btn-caption">web developper</span>
            </a>
            <a
              className="btn mobile-vertical btn-default btn-hover btn-hover-accent-mobile animate-headline"
              href="#project"
            >
              <span className="btn-caption">MERN</span>
            </a>
            <a
              className="btn mobile-vertical btn-default btn-hover btn-hover-accent-mobile animate-headline"
              href="#project"
            >
              <span className="btn-caption">smart contract</span>
            </a>
          </div>
        </div>
        <div className="spline_style">
          <Spline scene="https://prod.spline.design/tSH32vPhaA4IN5ic/scene.splinecode" />
        </div>

        {/* Headline End */}
      </section>
    </>
  );
};
export default Home;
