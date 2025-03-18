import { useState } from "react";
import * as ReactRouterDom from "react-router-dom";
import Project from "../Components/Project";
import list from "../Ressources/Projectdata";
import "../CSS/Project.scss";

// Define the ProjectData type
interface ProjectData {
  id: number;
  logo: string;
  title: string;
  link: string;
  description: string;
}

const { BrowserRouter, Routes, Route, Outlet, useOutletContext } = ReactRouterDom;

// Define the context type
interface OutletContext {
  setContentClass: (className: string) => void;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Access setContentClass from the outlet context
  const { setContentClass } = useOutletContext<OutletContext>();

  const handleProjectClick = (project: ProjectData) => {
    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
      setContentClass(""); // Reset Content class
    } else {
      setSelectedProject(project);
      setContentClass("project"); // Add "project" class to Content
    }
  };

  return (
    <div>
      <h1>Projects</h1>
      <div id="Projects">
        {list.map((project) => (
          <div key={project.id} onClick={() => handleProjectClick(project)} className="Project">
            <Project data={project} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div id="ProjectDetails">
          <button
            onClick={() => {
              setSelectedProject(null);
              setContentClass("");
            }}
          >
            x
          </button>
          <h2>{selectedProject.title}</h2>
          <img src={`/Ressources/${selectedProject.logo}`} alt={selectedProject.title} />
          <p>{selectedProject.description}</p>

          <a href={selectedProject.link} target="_blank" rel="external">
            Visit Project
          </a>
        </div>
      )}
    </div>
  );
}
