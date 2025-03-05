import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useAuthStore from './stores/authStore';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Learn from './pages/Learn';
import Marketplace from './pages/Marketplace';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Contact from './components/contact';
import Offers from "./pages/Offers";
import AdminDashboard1 from './pages/AdminSidebar';
import FirstPage from './pages/FirstPage';
import UserManagement from './pages/UserSidebar';
import ChallengesDashbaord from './pages/ChallengesDashboard';
import UserDashboard from './pages/UserDashboard';
import VirtualReality from "./pages/VirtualReality";
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
      
      <Routes>
        <Route path='/' element={<FirstPage/>}>
        <Route index element={<Home />}/>
        <Route path="/auth" element={<Auth />} />
        <Route path='/offers' element={<Offers/>}/>
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
              <Contact />
          }/>
           <Route
          path="/marketplace"
          element={
            
              <Marketplace />
            
          }
        />
         <Route
          path="/learn"
          element={
            
              <Learn />
            
          }
        />
        </Route>
        <Route path='/admin' element={<AdminDashboard1 />}>
        <Route index element={<AdminDashboard/>} />
        <Route path='/admin/users' element={<UserDashboard/>} />
        <Route path='/admin/challenges' element={<ChallengesDashbaord/>} />
        <Route path="/admin/marketplace" element={<Marketplace />} />
        </Route>
        <Route path='/user' element={<UserManagement/>}>
        <Route
          index
          element={
            
              <Dashboard />
            
          }
        />
        <Route path="/user/learn" element={<Learn />} />
        <Route path="/user/marketplace" element={<Marketplace />} />
        <Route path="/user/vr" element={<VirtualReality/>} />
        </Route>
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