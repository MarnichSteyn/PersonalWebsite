import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/education" element={<div>Education Page</div>} />
            <Route path="/experience" element={<div>Experience Page</div>} />
            <Route path="/blog" element={<div>Blog Page</div>} />
          </Routes>
          </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;