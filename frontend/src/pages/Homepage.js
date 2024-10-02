import React from 'react';
import CompanyCard from '../components/CompanyCard';

function Homepage() {
  // You can pass test data to CompanyCard to see how it renders
  const testCompany = {
    name: "Test Company",
    description: "This is a test company for testing purposes.",
    logoUrl: "https://via.placeholder.com/150"
  };

  return (
    <div>
      <h1>Welcome to Jobly!</h1>
      <p>Your one-stop shop for job hunting and company listings.</p>
      <CompanyCard 
        name={testCompany.name}
        description={testCompany.description}
        logoUrl={testCompany.logoUrl}
      />
    </div>
  );
}

export default Homepage;
