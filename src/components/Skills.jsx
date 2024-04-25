import BallCanvas from "./canvas/Ball";
import { frontEnd, dataBase, otherSkils } from "../assets/icon";

const Skills = () => {
  return (
    <>
      <div>
        <h4 className="skill-title">Front end skills</h4>

        <div className="skill-container">
          {frontEnd.map((skill, index) => (
            <div className="skill" key={index}>
              <BallCanvas icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="skill-title">data base</h4>

        <div className="skill-container">
          {dataBase.map((skill, index) => (
            <div className="skill" key={index + 20}>
              <BallCanvas icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="skill-title">Front end skills</h4>

        <div className="skill-container">
          {otherSkils.map((skill, index) => (
            <div className="skill" key={index + 234}>
              <BallCanvas icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Skills;
