import React from 'react';

const filterCategories = [
  { key: 'all', label: 'すべて' },
  { key: 'web-app', label: 'Webアプリ' },
  { key: 'web-site', label: 'Webサイト' },
  { key: 'game', label: 'ゲーム' },
  { key: 'tool', label: 'ツール' },
];

interface FilterButtonsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="filter-buttons">
      {filterCategories.map((category) => (
        <button
          key={category.key}
          className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
          onClick={() => onFilterChange(category.key)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;