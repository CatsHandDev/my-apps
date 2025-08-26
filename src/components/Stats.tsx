import React from 'react';

const Stats: React.FC = () => {
  const statsData = [
    { number: 6, label: 'プロジェクト' },
    { number: 5, label: '技術スタック' },
    // { number: 5, label: '年間経験' },
  ];

  return (
    <div className="stats">
      {statsData.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <span className="stat-number">{stat.number}</span>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;