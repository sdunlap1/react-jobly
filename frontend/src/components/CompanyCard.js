import React from 'react';

function CompanyCard({ name, description, logoUrl }) {
  return (
    <div className="company-card">
      <img src={logoUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CompanyCard;
