import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api';

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompany() {
      const result = await JoblyApi.getCompany(handle);
      setCompany(result);
    }
    getCompany();
  }, [handle]);

  if (!company) return <p>Loading...</p>;

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <h3>Jobs at {company.name}</h3>
      {company.jobs.map(job => (
        <div key={job.id}>
          <h4>{job.title}</h4>
          <p>Salary: {job.salary ? `$${job.salary}` : "N/A"}</p>
          <p>Equity: {job.equity}</p>
        </div>
      ))}
    </div>
  );
}

export default CompanyDetail;
