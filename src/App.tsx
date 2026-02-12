import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import Courses from './pages/Courses';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Users from './pages/Users';
import Banners from './pages/Banners';
import Applications from './pages/Applications';
import Messages from './pages/Messages';
import SEO from './pages/SEO';
import Audit from './pages/Audit';
import './App.css';

function ProtectedRoute({ children }: { children: React.ReactElement }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function AdminLayout({ children }: { children: React.ReactElement }) {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={
        <ProtectedRoute>
          <AdminLayout><Dashboard /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/users" element={
        <ProtectedRoute>
          <AdminLayout><Users /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/courses" element={
        <ProtectedRoute>
          <AdminLayout><Courses /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/products" element={
        <ProtectedRoute>
          <AdminLayout><Products /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/orders" element={
        <ProtectedRoute>
          <AdminLayout><Orders /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/applications" element={
        <ProtectedRoute>
          <AdminLayout><Applications /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/messages" element={
        <ProtectedRoute>
          <AdminLayout><Messages /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/banners" element={
        <ProtectedRoute>
          <AdminLayout><Banners /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/seo" element={
        <ProtectedRoute>
          <AdminLayout><SEO /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/audit" element={
        <ProtectedRoute>
          <AdminLayout><Audit /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/" element={<Navigate to="/admin" />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
