import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import "../App.css";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const result = await JoblyApi.getCompanies();
      setCompanies(result);
    }
    getCompanies();
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      {companies.map(company => (
        <div key={company.handle}>
          <h3>{company.name}</h3>
          <p>{company.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CompanyList;
