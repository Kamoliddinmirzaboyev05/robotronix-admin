import { FaUsers, FaBook, FaBox, FaShoppingCart, FaEnvelope, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './Dashboard.css';

interface StatCard {
  title: string;
  value: number;
  icon: React.ReactElement;
  color: string;
  change: number;
  changeType: 'up' | 'down';
}

const stats: StatCard[] = [
  { title: 'Foydalanuvchilar', value: 1247, icon: <FaUsers />, color: '#0066ff', change: 12.5, changeType: 'up' },
  { title: 'Kurslar', value: 24, icon: <FaBook />, color: '#00ccff', change: 8.2, changeType: 'up' },
  { title: 'Mahsulotlar', value: 156, icon: <FaBox />, color: '#ff5722', change: 3.1, changeType: 'down' },
  { title: 'Buyurtmalar', value: 89, icon: <FaShoppingCart />, color: '#9c27b0', change: 15.8, changeType: 'up' },
  { title: 'Xabarlar', value: 342, icon: <FaEnvelope />, color: '#4caf50', change: 5.4, changeType: 'up' },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Robotronix Admin Panel</p>
        </div>
      </header>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.title} className="stat-card">
            <div className="stat-content">
              <p className="stat-title">{stat.title}</p>
              <h2 className="stat-value">{stat.value.toLocaleString()}</h2>
              <div className={`stat-change ${stat.changeType}`}>
                {stat.changeType === 'up' ? <FaArrowUp /> : <FaArrowDown />}
                <span>{stat.change}%</span>
              </div>
            </div>
            <div className="stat-icon" style={{ background: stat.color }}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="welcome-card">
          <h2>Xush kelibsiz!</h2>
          <p>Chap tomondagi menu orqali saytni boshqarishingiz mumkin. Barcha funksiyalar sizning ixtiyoringizda.</p>
          <div className="quick-actions">
            <button className="action-btn primary">Yangi kurs qo'shish</button>
            <button className="action-btn secondary">Mahsulot qo'shish</button>
          </div>
        </div>

        <div className="recent-activity">
          <h3>So'nggi faoliyat</h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon" style={{ background: '#0066ff' }}>
                <FaUsers />
              </div>
              <div className="activity-content">
                <p className="activity-title">Yangi foydalanuvchi ro'yxatdan o'tdi</p>
                <p className="activity-time">5 daqiqa oldin</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon" style={{ background: '#9c27b0' }}>
                <FaShoppingCart />
              </div>
              <div className="activity-content">
                <p className="activity-title">Yangi buyurtma qabul qilindi</p>
                <p className="activity-time">15 daqiqa oldin</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon" style={{ background: '#4caf50' }}>
                <FaEnvelope />
              </div>
              <div className="activity-content">
                <p className="activity-title">Yangi xabar keldi</p>
                <p className="activity-time">1 soat oldin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
