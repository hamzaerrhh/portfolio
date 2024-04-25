import Lottie from "lottie-react";
import desk from "../assets/desktop.json";
import hamza from "../assets/hamza.jpg";
import { FaLinkedin, FaGithub, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";

const Avatar = () => {
  return (
    <div className="avatar">
      <div className="avatar__container d-flex flex-column justify-content-lg-between">
        {/* image and logo */}
        <div className="avatar__block">
          <div className="avatar__logo d-flex align-items-center">
            <div>
              <Lottie animationData={desk} loop={true} size={80} />
            </div>
            <div className="logo__caption">
              <p>
                Hamza
                <br />
                errabbane
              </p>
            </div>
          </div>
          <div className="avatar__image">
            <img
              src={hamza}
              alt="Braxton - Personal Portfolio & Resume HTML Template Avatar"
            />
          </div>
        </div>
        {/* data caption #1 */}
        <div className="avatar__block">
          <h6>
            <small className="top">Specialization:</small>
            web developper:
            <br />
            and smart contat developper
          </h6>
        </div>

        <div className="avatar__block">
          <div className="avatar__socials">
            <ul className="socials-square_ul d-flex justify-content-between">
              <li className="socials-square__item">
                <a
                  className="socials-square__link "
                  href="https://ma.linkedin.com/in/hamza-errabbane-5ba243273"
                  target="_blank"
                >
                  <FaLinkedin color="white" size={24} />
                </a>
              </li>
              <li className="social_li">
                <a
                  className="socials-square__link"
                  href="https://ma.linkedin.com/in/hamza-errabbane-5ba243273"
                  target="_blank"
                >
                  <FaGithubSquare size={24} />
                </a>
              </li>
              <li className="socials-square__item">
                <a
                  className="socials-square__link "
                  href="malito:hmzaeer@gmail.com"
                  target="_blank"
                >
                  <SiGmail size={24} />
                </a>
              </li>
              <li className="socials-square__item">
                <a
                  className="socials-square__link"
                  href="https://ma.linkedin.com/in/hamza-errabbane-5ba243273"
                  target="_blank"
                >
                  <RiWhatsappFill size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Avatar;
