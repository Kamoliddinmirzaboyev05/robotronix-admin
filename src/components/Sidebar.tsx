import { NavLink, useNavigate } from 'react-router-dom';
import { 
  FaHome, FaUsers, FaBook, FaBox, FaShoppingCart, 
  FaClipboardList, FaEnvelope, FaImage, FaSearch, 
  FaHistory, FaGlobe, FaSignOutAlt, FaRobot, FaChevronDown 
} from 'react-icons/fa';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactElement;
  path: string;
  badge?: number;
}

const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <FaHome />, path: '/admin' },
  { id: 'users', label: 'Foydalanuvchilar', icon: <FaUsers />, path: '/admin/users' },
  { id: 'courses', label: 'Kurslar', icon: <FaBook />, path: '/admin/courses' },
  { id: 'products', label: 'Mahsulotlar', icon: <FaBox />, path: '/admin/products' },
  { id: 'orders', label: 'Buyurtmalar', icon: <FaShoppingCart />, path: '/admin/orders', badge: 5 },
  { id: 'applications', label: "Arizalar", icon: <FaClipboardList />, path: '/admin/applications', badge: 12 },
  { id: 'messages', label: 'Xabarlar', icon: <FaEnvelope />, path: '/admin/messages', badge: 8 },
  { id: 'banners', label: 'Bannerlar', icon: <FaImage />, path: '/admin/banners' },
  { id: 'seo', label: 'SEO Sozlamalar', icon: <FaSearch />, path: '/admin/seo' },
  { id: 'audit', label: 'Audit Jurnali', icon: <FaHistory />, path: '/admin/audit' },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-brand">
        <div className="brand-logo">
          <FaRobot />
        </div>
        {!isCollapsed && (
          <div className="brand-text">
            <h2>Robotronix</h2>
            <p>Admin Panel</p>
          </div>
        )}
      </div>

      <div className="sidebar-header">
        <div className="admin-avatar">
          <img src="https://ui-avatars.com/api/?name=Admin+User&background=0066ff&color=fff" alt="Admin" />
        </div>
        {!isCollapsed && (
          <>
            <h3 className="admin-name">{user?.name || 'Admin User'}</h3>
            <p className="admin-role">Administrator</p>
          </>
        )}
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            end={item.path === '/admin'}
            title={isCollapsed ? item.label : ''}
          >
            <span className="nav-icon">{item.icon}</span>
            {!isCollapsed && <span className="nav-label">{item.label}</span>}
            {!isCollapsed && item.badge && (
              <span className="nav-badge">{item.badge}</span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <a href="/" target="_blank" className="nav-item settings" title={isCollapsed ? 'Saytga qaytish' : ''}>
          <span className="nav-icon"><FaGlobe /></span>
          {!isCollapsed && <span className="nav-label">Saytga qaytish</span>}
        </a>
        <button className="nav-item logout" onClick={handleLogout} title={isCollapsed ? 'Chiqish' : ''}>
          <span className="nav-icon"><FaSignOutAlt /></span>
          {!isCollapsed && <span className="nav-label">Chiqish</span>}
        </button>
      </div>

      <button className="sidebar-toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
        <FaChevronDown className={isCollapsed ? 'rotated' : ''} />
      </button>
    </aside>
  );
}
