import React, { useState, useMemo } from 'react';
import './ModernDesign.scss';
import Header from './components/Header';
import Stats from './components/Stats';
import FilterButtons from './components/FilterButtons';
import ProjectsGrid from './components/ProjectsGrid';
import { projectsData } from './data/projects';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projectsData;
    }
    return projectsData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="container">
      <Header />
      <Stats />
      <FilterButtons
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <ProjectsGrid projects={filteredProjects} />
    </div>
  );
};

export default App;