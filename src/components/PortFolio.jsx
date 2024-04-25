import dash from "../assets/dash.jpg";
import appoinement from "../assets/apoinement.jpg";
import smart from "../assets/smart.jpg";
import landing from "../assets/gem.jpg";

// import StarsCanvas from "../tshirt/StarCanvas";
const PortFolio = () => {
  return (
    <>
      <section id="project" className="inner inner-first portfolio">
        <div className="content__block section-grid-title">
          <p className="h2__subtitle animate-in-up">
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
            <span>Portfolio</span>
          </p>
          <h2 className="h2__title animate-in-up">
            Check out my featured projects
          </h2>
        </div>
        {/* Content Block - H2 Section Title End */}
        {/* Content Block - Works Gallery Start */}
        <div className="content__block grid-block">
          <div className="container-fluid p-0">
            <div className="row g-0 align-items-stretch cards">
              {/* services cards grid single item */}
              <div className="col-12 col-md-6 cards__item grid-item animate-card-2">
                <div className="cards__card d-flex flex-column">
                  <div className="cards__descr">
                    <h4 className="cards__title animate-in-up">
                      landing pages
                    </h4>
                    <div className="cards__tags d-flex flex-wrap animate-in-up">
                      <span className="rounded-tag tag-outline">three js</span>
                      <span className="rounded-tag tag-outline">spline</span>
                      <span className="rounded-tag tag-outline">blender</span>
                    </div>
                    <p className="small cards__text animate-in-up">
                      awsame landing page. incluse 3d modeling and shaders
                      creation.
                    </p>
                  </div>
                  <div className="cards__image d-flex">
                    <img src={landing} />{" "}
                  </div>
                  s
                </div>
              </div>
              {/* services grid cards single item */}
              <div className="col-12 col-md-6 cards__item grid-item animate-card-2">
                <div className="cards__card d-flex flex-column">
                  <div className="cards__descr">
                    <h4 className="cards__title animate-in-up">
                      ecomerce website
                    </h4>
                    <div className="cards__tags d-flex flex-wrap animate-in-up">
                      <span className="rounded-tag tag-outline">MERN</span>
                      <span className="rounded-tag tag-outline">MUI</span>
                    </div>
                    <p className="small cards__text animate-in-up">
                      I use the mern tech and D3.js to make a a full fonconale
                      website .
                    </p>
                  </div>
                  <div className="cards__image d-flex animate-in-up">
                    <img src={dash} />
                  </div>
                </div>
              </div>
              {/* services grid cards single item */}
              <div className="col-12 col-md-6 cards__item grid-item animate-card-2">
                <div className="cards__card d-flex flex-column">
                  <div className="cards__descr">
                    <h4 className="cards__title animate-in-up">
                      system creation
                    </h4>
                    <div className="cards__tags d-flex flex-wrap animate-in-up">
                      <span className="rounded-tag tag-outline">jira</span>
                      <span className="rounded-tag tag-outline">Analytics</span>
                    </div>
                    <p className="small cards__text animate-in-up">
                      i will create a systeme that fonction with client need
                      included appoinemet .....
                    </p>
                  </div>
                  <div className="cards__image d-flex">
                    <img src={appoinement} alt="Service/Feature Image" />
                  </div>
                </div>
              </div>
              {/* services grid cards single item */}
              <div className="col-12 col-md-6 cards__item grid-item animate-card-2">
                <div className="cards__card d-flex flex-column">
                  <div className="cards__descr">
                    <h4 className="cards__title animate-in-up">
                      smart contrat
                      <br />
                    </h4>
                    <div className="cards__tags d-flex flex-wrap animate-in-up">
                      <span className="rounded-tag tag-outline">solidity</span>
                      <span className="rounded-tag tag-outline">meta mask</span>
                    </div>
                    <p className="small cards__text animate-in-up">
                      I m a debutand in smart contart and web 3 but i can create
                      transaction contrat and nft
                    </p>
                  </div>
                  <div className="cards__image d-flex animate-in-up">
                    <img src={smart} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content Block - Works Gallery End */}
      </section>
    </>
  );
};
export default PortFolio;
