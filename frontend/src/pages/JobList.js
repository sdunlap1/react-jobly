import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import "../App.css"

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const result = await JoblyApi.getJobs();
      setJobs(result);
    }
    getJobs();
  }, []);

  return (
    <div>
      <h1>Jobs</h1>
      {jobs.map(job => (
        <div key={job.id}>
          <h4>{job.title}</h4>
          <p>Salary: {job.salary ? `$${job.salary}` : "N/A"}</p>
          <p>Equity: {job.equity}</p>
        </div>
      ))}
    </div>
  );
}

export default JobList;
