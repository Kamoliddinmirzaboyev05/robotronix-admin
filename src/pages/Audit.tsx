import { FaHistory, FaUser, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import './Audit.css';

interface AuditLog {
  id: string;
  user: string;
  action: string;
  entity: string;
  entityName: string;
  timestamp: string;
  details?: string;
}

const mockLogs: AuditLog[] = [
  {
    id: '1',
    user: 'Admin User',
    action: 'create',
    entity: 'course',
    entityName: 'Python Dasturlash',
    timestamp: '2024-02-12T10:30:00',
    details: 'Yangi kurs qo\'shildi',
  },
  {
    id: '2',
    user: 'Admin User',
    action: 'update',
    entity: 'product',
    entityName: 'Arduino Uno',
    timestamp: '2024-02-12T09:15:00',
    details: 'Narx yangilandi: 85000 so\'m',
  },
  {
    id: '3',
    user: 'Admin User',
    action: 'delete',
    entity: 'banner',
    entityName: 'Eski banner',
    timestamp: '2024-02-11T16:45:00',
    details: 'Banner o\'chirildi',
  },
];

export default function Audit() {
  const getActionIcon = (action: string) => {
    switch (action) {
      case 'create': return <FaPlus />;
      case 'update': return <FaEdit />;
      case 'delete': return <FaTrash />;
      default: return <FaHistory />;
    }
  };

  const getActionColor = (action: string) => {
    switch (action) {
      case 'create': return '#4caf50';
      case 'update': return '#0066ff';
      case 'delete': return '#ef5350';
      default: return '#8b92a7';
    }
  };

  const getActionLabel = (action: string) => {
    switch (action) {
      case 'create': return 'Yaratildi';
      case 'update': return 'Yangilandi';
      case 'delete': return 'O\'chirildi';
      default: return action;
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1><FaHistory /> Audit Jurnali</h1>
          <p>Tizimda amalga oshirilgan barcha o\'zgarishlar</p>
        </div>
      </div>

      <div className="audit-timeline">
        {mockLogs.map((log) => (
          <div key={log.id} className="audit-item">
            <div className="audit-icon" style={{ background: getActionColor(log.action) }}>
              {getActionIcon(log.action)}
            </div>
            <div className="audit-content">
              <div className="audit-header">
                <div>
                  <h3>{log.entityName}</h3>
                  <span className="audit-badge" style={{ background: `${getActionColor(log.action)}20`, color: getActionColor(log.action) }}>
                    {getActionLabel(log.action)}
                  </span>
                </div>
                <span className="audit-time">
                  {new Date(log.timestamp).toLocaleString('uz-UZ')}
                </span>
              </div>
              <div className="audit-details">
                <p><FaUser /> {log.user}</p>
                {log.details && <p className="audit-description">{log.details}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
