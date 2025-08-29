import React from 'react';

const techStack = ['HTML', 'CSS', 'React', 'Vite', 'Next.js', 'TypeScript'];

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>App Storage</h1>
      <p>React・TypeScript・SCSSで作った作品集</p>

      <div className="tech-stack">
        {techStack.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;