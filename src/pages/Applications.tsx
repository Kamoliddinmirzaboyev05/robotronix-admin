import { useState } from 'react';
import { FaClipboardList, FaEye, FaPhone, FaEnvelope, FaUser } from 'react-icons/fa';
import type { Application } from '../types';
import './Applications.css';

const mockApplications: Application[] = [
  {
    id: '1',
    courseId: '1',
    courseName: 'Python Dasturlash Asoslari',
    userName: 'Aziz Rahimov',
    userEmail: 'aziz@example.com',
    userPhone: '+998901234567',
    status: 'new',
    createdAt: '2024-02-12T10:30:00',
  },
  {
    id: '2',
    courseId: '2',
    courseName: 'Web Dasturlash - React',
    userName: 'Dilshod Karimov',
    userEmail: 'dilshod@example.com',
    userPhone: '+998907654321',
    status: 'contacted',
    createdAt: '2024-02-11T14:20:00',
  },
  {
    id: '3',
    courseId: '1',
    courseName: 'Python Dasturlash Asoslari',
    userName: 'Malika Tosheva',
    userEmail: 'malika@example.com',
    userPhone: '+998909876543',
    status: 'enrolled',
    createdAt: '2024-02-10T09:15:00',
  },
];

export default function Applications() {
  const [applications, setApplications] = useState<Application[]>(mockApplications);
  const [filter, setFilter] = useState<Application['status'] | 'all'>('all');

  const getStatusBadge = (status: Application['status']) => {
    const badges = {
      new: { label: 'Yangi', class: 'badge-info' },
      contacted: { label: 'Aloqada', class: 'badge-warning' },
      enrolled: { label: 'Qabul qilindi', class: 'badge-success' },
      rejected: { label: 'Rad etildi', class: 'badge-danger' },
    };
    return badges[status];
  };

  const filteredApplications = filter === 'all' 
    ? applications 
    : applications.filter(app => app.status === filter);

  const updateStatus = (id: string, newStatus: Application['status']) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1><FaClipboardList /> Arizalar</h1>
          <p>Kursga yozilish arizalarini boshqaring</p>
        </div>
      </div>

      <div className="filter-tabs">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          Barchasi ({applications.length})
        </button>
        <button 
          className={filter === 'new' ? 'active' : ''} 
          onClick={() => setFilter('new')}
        >
          Yangi ({applications.filter(a => a.status === 'new').length})
        </button>
        <button 
          className={filter === 'contacted' ? 'active' : ''} 
          onClick={() => setFilter('contacted')}
        >
          Aloqada ({applications.filter(a => a.status === 'contacted').length})
        </button>
        <button 
          className={filter === 'enrolled' ? 'active' : ''} 
          onClick={() => setFilter('enrolled')}
        >
          Qabul qilindi ({applications.filter(a => a.status === 'enrolled').length})
        </button>
      </div>

      <div className="applications-grid">
        {filteredApplications.map((app) => (
          <div key={app.id} className="application-card">
            <div className="application-header">
              <h3>{app.courseName}</h3>
              <span className={`badge ${getStatusBadge(app.status).class}`}>
                {getStatusBadge(app.status).label}
              </span>
            </div>
            <div className="application-body">
              <div className="info-row">
                <FaUser />
                <span>{app.userName}</span>
              </div>
              <div className="info-row">
                <FaEnvelope />
                <span>{app.userEmail}</span>
              </div>
              <div className="info-row">
                <FaPhone />
                <span>{app.userPhone}</span>
              </div>
              <div className="info-row">
                <span className="date-label">Ariza sanasi:</span>
                <span>{new Date(app.createdAt).toLocaleString('uz-UZ')}</span>
              </div>
            </div>
            <div className="application-actions">
              <select 
                value={app.status} 
                onChange={(e) => updateStatus(app.id, e.target.value as Application['status'])}
                className="status-select"
              >
                <option value="new">Yangi</option>
                <option value="contacted">Aloqada</option>
                <option value="enrolled">Qabul qilindi</option>
                <option value="rejected">Rad etildi</option>
              </select>
              <button className="btn-icon btn-view"><FaEye /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
