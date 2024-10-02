import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CompanyList from './pages/CompanyList';
import JobList from './pages/JobList';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import ProfileForm from './pages/ProfileForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/profile" element={<ProfileForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
