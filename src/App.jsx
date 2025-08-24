import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Education from './pages/Education'; 
import Experience from './pages/Experience';
import Login from './components/Login';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/education" replace />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<div>Blog Page</div>} />
            <Route path="/login" element={<Login onLoginSuccess={() => navigate('/blog')} />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;