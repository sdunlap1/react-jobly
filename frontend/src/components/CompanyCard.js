import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard({ handle, name, description, logoUrl }) {

  const logoSrc = logoUrl || '/logos/logo1.png'; // Default logo if no logo exists

  return (
    <div className="company-card">
      {logoUrl && <img src={logoSrc} alt={`${name} logo`} className="company-logo" />}
      {/* Only renders the <img> tag if logoUrl exists */}
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/companies/${handle}`}>View Details</Link>
    </div>
  );
}

export default CompanyCard;
