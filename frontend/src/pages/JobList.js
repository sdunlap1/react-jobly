import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import JobCard from '../components/JobCard'; // Reusable JobCard component
import "../App.css"

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  // Add a loading state

  useEffect(() => {
    async function getJobs() {
      const result = await JoblyApi.getJobs();
      setJobs(result);
      setIsLoading(false);  // Set loading to false after data is fetched
    }
    getJobs();
  }, []);

  if (isLoading) return <p>Loading jobs...</p>;  // Render loading message

  return (
    <div>
      <h1>Jobs</h1>
      {/* If there are no jobs, display a message */}
      {jobs.length ? (
        jobs.map(job => (
          <JobCard  // Use the JobCard component to display each job
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
          />
        ))
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}

export default JobList;
