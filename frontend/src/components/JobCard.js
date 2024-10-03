import React from 'react';

function JobCard({ id, title, salary, equity }) {
  return (
    <div className="job-card">
      <h4>{title}</h4>
      <p>Salary: {salary ? `$${salary}` : "N/A"}</p>
      <p>Equity: {equity ? equity : "N/A"}</p>
    </div>
  );
}

export default JobCard;
