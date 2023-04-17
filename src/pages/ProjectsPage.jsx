// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";
// import "./ProjectsPage.css";

// Data
import { allProjects } from "../data";

function ProjectsPage() {
  return (
    <div id="project-list">
      {allProjects.map((project, key) => {
        return <ProjectCard key={key} projectData={project} />;
      })}
    </div>
  );
}

export default ProjectsPage;
