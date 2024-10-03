import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CompanyList from './pages/CompanyList';
import CompanyDetail from './pages/CompanyDetail';
import JobList from './pages/JobList';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import ProfileForm from './pages/ProfileForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
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
