import home from "../assets/home.png";
import { FaHome } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";
import { GiArrowScope } from "react-icons/gi";

const Header = () => {
  return (
    <header id="header" className="header d-flex justify-content-between">
      {/* Navigation Menu Start */}
      <div className="header__navigation">
        <nav id="menu" className="menu">
          <ul className="menu__list d-flex justify-content-start">
            <li className="menu__item">
              <a className="menu__link btn" href="#home">
                <span className="menu__caption">Home</span>
                <FaHome size={20} className="menu__icon" />
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link btn" href="#project">
                <span className="menu__caption">Project</span>
                <AiFillProject className="menu__icon" />
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link btn" href="#about">
                <span className="menu__caption">Skills</span>
                <GiArrowScope className="menu__icon" />
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link btn" href="#resume">
                <span className="menu__caption">Resume</span>
                <AiFillProfile className="menu__icon" />
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link btn" href="#contact">
                <span className="menu__caption">Contact</span>
                <MdContacts size={20} className="menu__icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
