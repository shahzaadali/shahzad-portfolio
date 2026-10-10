
function ProjectCard({ project }) {
    return (
      <article className="project-card">
        
<div className="project-card-visual">
  {project.image ? (
    <img
      src={project.image}
      alt={`${project.title} application screenshot`}
      className="project-image"
      loading="lazy"
    />
  ) : (
    <span className="project-visual-label">
      {project.visualLabel}
    </span>
  )}

  <span className="project-category">
    {project.category}
  </span>
</div>

  
        <div className="project-card-content">
          <h3>{project.title}</h3>
  
          <p>{project.description}</p>
  
          <div className="project-tech">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
  
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub ↗
            </a>
          )}
        </div>
      </article>
    )
  }
  
  export default ProjectCard
  