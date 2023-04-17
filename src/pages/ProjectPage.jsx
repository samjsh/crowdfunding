import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProjects } from "../data";
import ContactForm from "./ContactForm";
import ProgressBar from "../components/ProgressBar/ProgressBar";

import "./ProjectPage.css";

function ProjectPage() {
  const { id } = useParams();
  const project = allProjects[parseInt(id) - 1];
  project.contributions = 0;

  const [projectData, setProjectData] = useState(project);

  const onSubmit = () => {
    const val = document.getElementById("sub").value;
    console.log(val);

    // projectData.goal = projectData.goal - val;
    // setProjectData(projectData);
    // return false;
    // console.log("here");
    // console.log(projectData);

    setProjectData((projectData) => ({
      ...projectData,
      contributions: parseInt(projectData.contributions) + parseInt(val),
    }));
    // const { id } = useParams();

    // const project = allProjects[parseInt(id) - 1];
    // project.goal = project.goal - 100;

    // allProjects[parseInt(id) - 1] = project;
    document.getElementById("sub").value = "";
    return false;
  };

  return (
    // <div className="project-info">
    <div className="project-container">
      <h1 className="project-title">{project.title}</h1>
      <div className="project-info">
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-info">
        <div className="project-goal">
          <div className="project-details">
            <p className="project-status">
              Status: {project.is_open ? "Open" : "Closed"}
            </p>
          </div>
          <p>Contributions: ${projectData.contributions}</p>
          <p className="project-goal">Goal: ${projectData.goal}</p>

          <form>
            <div>
              <input id="sub" type="number" className="contribute-text"></input>
              <button
                type="button"
                value="Contribute"
                className="contribute-button form-hero-btn"
                onClick={onSubmit}
              >
                Contribute
              </button>
            </div>
          </form>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <ProgressBar
              completed={
                projectData.goal > 0
                  ? Math.ceil(
                      (projectData.contributions / projectData.goal) * 100
                    )
                  : 0
              }
            ></ProgressBar>
          </div>
        </div>
      </div>

      <div className="project-info">
        <div className="form-container">
          <p className="contact-form-font">
            Thank you for your interest in donating to Fosterfund! Please fill
            out this form with your donation amount and any comments or
            questions you may have. We'll be in touch soon. Thank you for your
            support!
          </p>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
