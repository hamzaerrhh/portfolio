const About = () => {
  return (
    <>
      <section id="about" className="inner about">
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
            <span>About Me</span>
          </p>
          <h2 className="h2__title animate-in-up">
            Turning your besnise to the web.2 or web.3 word
          </h2>
        </div>

        {/* Content Block - About Me Data Start */}
        <div className="content__block grid-block block-large">
          <div className="container-fluid p-0">
            <div className="row g-0 justify-content-between">
              {/* About Me Description Start */}
              <div className="col-12 col-xl-8 grid-item about-descr">
                <p className="about-descr__text animate-in-up">
                  I wonder if I've been changed in the night? Let me think. Was
                  I the same when I got up this morning? I almost think I can
                  remember feeling a little different. But if I'm not the same,
                  the
                  <a href="#0" className="text-link">
                    next question
                  </a>
                  is 'Who in the world am I?' Ah, that's the great puzzle!
                </p>
                <p className="about-descr__text animate-in-up">
                  Be what you would seem to be - or, if you'd like it put more
                  simply - never imagine yourself not to be otherwise than what
                  it might appear to others that what you were or
                  <a href="#0" className="text-link">
                    might have been
                  </a>
                  was not otherwise than what you had been would have appeared
                  to them to be otherwise.
                </p>
                <div className="btn-group about-descr__btnholder animate-in-up">
                  <a
                    className="btn mobile-vertical btn-default btn-hover btn-hover-accent"
                    href="#0"
                  >
                    <span className="btn-caption">contact me</span>
                  </a>
                </div>
              </div>
              {/* About Me Description End */}
              {/* About Me Information Start */}
              <div className="col-12 col-xl-4 grid-item about-info">
                <div className="about-info__item animate-in-up">
                  <h6>
                    <small className="top">Name</small>
                    Hamza errabbane
                  </h6>
                </div>
                <div className="about-info__item animate-in-up">
                  <h6>
                    <small className="top">Phone</small>
                    <a className="text-link-bold" href="tel:+12127089400">
                      +212 704828301
                    </a>
                  </h6>
                </div>
                <div className="about-info__item animate-in-up">
                  <h6>
                    <small className="top">Email</small>
                    <a
                      className="text-link-bold"
                      href="mailto:example@example.com?subject=Message%20from%20your%20site"
                    >
                      hmzaeer@gmail.com
                    </a>
                  </h6>
                </div>
                <div className="about-info__item animate-in-up">
                  <h6>
                    <small className="top">Location</small>
                    <a
                      className="text-link-bold"
                      href="https://maps.app.goo.gl/xMJXTEUeHkv6kYRQ6"
                      target="_blank"
                    >
                      Oujda,Morroco
                    </a>
                  </h6>
                </div>
              </div>
              {/* About Me Information End */}
            </div>
          </div>
        </div>
        <div className="content__block section-grid-title">
          <h2 className="h2__title animate-in-up">my teck stack</h2>
        </div>
      </section>
    </>
  );
};
export default About;
