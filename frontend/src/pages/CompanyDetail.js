import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobCard from '../components/JobCard';
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
    <div className="company-detail">
      <h1>{company.name}</h1>
      <p>{company.description}</p>

      <h3>Jobs at {company.name}</h3>
      <div className="job-list">
        {company.jobs.length ? (
          company.jobs.map(job => (
            <JobCard
              key={job.id}
              title={job.title}
              salary={job.salary}
              equity={job.equity}
              companyName={company.name}  // Pass the company name as a prop
            />
          ))
        ) : (
          <p>No jobs available at this company.</p>
        )}
      </div>
    </div>
  );
}

export default CompanyDetail;
