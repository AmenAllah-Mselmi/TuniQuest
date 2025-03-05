import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useAuthStore from './stores/authStore';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Learn from './pages/Learn';
import Marketplace from './pages/Marketplace';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Contact from './components/contact';
import Offers from "./pages/Offers";
import AdminDashboard1 from './pages/AdminDashboard';
function PrivateRoute({ children, roles = [] }) {
  const { user, profile, loading } = useAuthStore();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  if (roles.length > 0 && !roles.includes(profile?.role)) {
    return <Navigate to="/" />;
  }

  return children;
}

function App() {
  const { loadUser } = useAuthStore();

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          }
        />
        <Route path='/offers' element={<Offers/>}/>
        <Route
          path="/learn"
          element={
            
              <Learn />
            
          }
        />
        <Route
          path="/marketplace"
          element={
            
              <Marketplace />
            
          }
        />
        <Route
          path="/contact"
          element={
              <Contact />
          }
        />
        <Route
          path="/dashboard"
          element={
            
              <Dashboard />
            
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute roles={['admin']}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/admin1" element={<AdminDashboard1 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;