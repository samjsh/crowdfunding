import { Link } from "react-router-dom";
import photo from "../../pages/Photos/catshelterwa.jpg";

///CSS
import "./ProjectCard.css";

function ProjectCard(props) {
  const { projectData } = props;
  const id = projectData.id;

  return (
    <div>
      <Link to={`/projects/${id}`}>
        <img src={`${projectData.image}`} className="project-pics" />
        <h3>{projectData.title}</h3>
      </Link>
    </div>
  );
}

export default ProjectCard;
