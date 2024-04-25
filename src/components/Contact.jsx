import { FaLinkedin, FaGithub, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    setErr("");
    e.preventDefault();
    if (formData.name === "") {
      setErr("please whritr somthing in message");
      return;
    }
    if (formData.name.length <= 3) {
      setErr("please provide a regulare name");
      return;
    }

    if (formData.message === "") {
      setErr("please whritr somthing in message");
      return;
    }

    try {
      const response = axios.post(
        "https://sheetdb.io/api/v1/r2co467u47mi0",
        formData
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    // You can access form data here via formData object
    console.log(formData);
    // Perform further actions like submitting the data to a backend API
  };

  return (
    <>
      <section id="contact" className="inner contact">
        {/* Content Block - H2 Section Title Start */}
        <div className="content__block section-title">
          <p className="h2__subtitle  animate-in-up">
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
            <span>Contact</span>
          </p>
          <h2 className="h2__title  animate-in-up">
            Let's make something awesome together!
          </h2>
        </div>
        {/* Content Block - H2 Section Title End */}
        {/* Content Block - Contact Form Start */}
        <div className="content__block grid-block block-grid-large">
          <div className="form-container">
            <h3> i will text u as soon as possible </h3>
            <form className="form contact-form" onSubmit={handleSubmit}>
              {/* END Hidden Required Fields*/}
              <div className="container-fluid p-0">
                <div className="row gx-0">
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required={true}
                    />
                  </div>
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      placeholder="Company Name"
                      required={true}
                    />
                  </div>
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required={true}
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      required={true}
                    />
                  </div>
                  <div className="col-12 form__item animate-in-up">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      required={true}
                    />
                  </div>
                  {err && <p style={{ color: "red", margin: "2rem" }}>{err}</p>}
                  <div className="col-12 form__item animate-in-up">
                    <button
                      className="btn btn-default btn-hover btn-hover-accent"
                      type="submit"
                    >
                      <span className="btn-caption">Send Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Content Block - Contact Form End */}
        {/* Content Block - Socials Cards Start */}
        <div className="content__block grid-block">
          <div className="socials-cards d-flex justify-content-start flex-wrap">
            {/* socials item */}
            <div className="socials-cards__item d-flex grid-item-s animate-card-5">
              <div className="socials-cards__card">
                linkden
                <br />
                <FaLinkedin />
                <a
                  className="socials-cards__link"
                  href="https://dribbble.com/"
                  target="_blank"
                />
              </div>
            </div>

            <div className="socials-cards__item d-flex grid-item-s animate-card-5">
              <div className="socials-cards__card">
                github
                <br />
                <FaGithub />{" "}
                <a
                  className="socials-cards__link"
                  href="https://www.instagram.com/"
                  target="_blank"
                />
              </div>
            </div>
            <div className="socials-cards__item d-flex grid-item-s animate-card-5">
              <div className="socials-cards__card">
                gmail
                <br />
                <SiGmail />
                <a
                  className="socials-cards__link"
                  href="https://www.twitch.tv/"
                  target="_blank"
                />
              </div>
            </div>
            {/* socials item */}
            <div className="socials-cards__item d-flex grid-item-s animate-card-5">
              <div className="socials-cards__card">
                whatsap
                <br />
                <RiWhatsappFill />
                <a
                  className="socials-cards__link"
                  href="https://www.pinterest.com/"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Content Block - Socials Cards End */}
        {/* Content Block - Teaser Start */}
        <div className="content__block">
          <div className="teaser">
            <p className="teaser__text animate-in-up">
              Want to know more about me, tell me about your project or just to
              say hello?
              <a
                className="text-link-bold"
                href="mailto:example@example.com?subject=Message%20from%20your%20site"
              >
                Drop me a line
              </a>
              and I'll get back as soon as possible.
            </p>
          </div>
        </div>
        {/* Content Block - Teaser End */}
        {/* Content Block - Contact Data Start */}
        <div className="content__block">
          <div className="container-fluid p-0 contact-lines animate-in-up">
            <div className="row g-0 contact-lines__item">
              {/* data item */}
              <div className="col-12 col-md-4 contact-lines__data">
                <p className="contact-lines__title animate-in-up">git</p>
                <p className="contact-lines__text animate-in-up">
                  <a
                    className="text-link-bold"
                    href="https://github.com/hamzaerrhh"
                    target="_blank"
                  >
                    hamzaerrhh
                  </a>
                </p>
              </div>
              {/* data item */}
              <div className="col-12 col-md-4 contact-lines__data">
                <p className="contact-lines__title animate-in-up">Phone</p>
                <p className="contact-lines__text animate-in-up">
                  <a className="text-link-bold" href="tel:+12127089400">
                    +212704828301
                  </a>
                </p>
              </div>
              {/* data item */}
              <div className="col-12 col-md-4 contact-lines__data">
                <p className="contact-lines__title animate-in-up">Email</p>
                <p className="contact-lines__text animate-in-up">
                  <a
                    className="text-link-bold"
                    href="mailto:hmzaeer@gmail.com?subject=Message%20from%20your%20site"
                  >
                    hmzaeer@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Content Block - Contact Data End */}
      </section>
    </>
  );
};
export default Contact;
