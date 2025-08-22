import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Education from './pages/Education'; 

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/education" replace />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<div>Experience Page</div>} />
            <Route path="/blog" element={<div>Blog Page</div>} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;