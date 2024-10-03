import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import CompanyCard from "../components/CompanyCard"; 
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
      <div>
        {/* Rendering CompanyCard for each company */}
        {companies.map(company => {
          return (
            <CompanyCard
              key={company.handle}
              handle={company.handle}
              name={company.name}
              description={company.description}
              logoUrl={company.logoUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CompanyList;
