import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Education from './pages/Education'; 
import Experience from './pages/Experience';
import Blog from './pages/Blog';
import Login from './components/Login';

function AppContent() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/education" replace />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login onLoginSuccess={() => navigate('/blog')} />} />
        </Routes>
      </Layout>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;