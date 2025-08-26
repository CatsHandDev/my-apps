import React from 'react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card fade-in">
      <div className={`project-image ${project.imageClass}`}>
        {project.image}
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.demoUrl} target='_blank' rel='noopener noreferrer'  className="btn btn-primary">デモを見る</a>
          {project.githubUrl &&
            <a href={project.githubUrl} target='_blank' rel='noopener noreferrer' className="btn btn-secondary">GitHub</a>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;