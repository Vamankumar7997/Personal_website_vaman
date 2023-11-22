import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

const ProjectCard = ({
  project: { title, imageSrc, description, skills = [], demo, source },
}) => {
  // console.log("Project:", title);
  // console.log("Skills:", techSkills);
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl("projects/project.png")}
        alt="project source"
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {skills && skills.length > 0 && (
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      )}

      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link}>
            Demo
          </a>
        )}
        {source && (
          <a href={source} className={styles.link}>
            Source
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
