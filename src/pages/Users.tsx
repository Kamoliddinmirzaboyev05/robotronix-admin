import { useState } from 'react';
import { FaUsers, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import './Users.css';

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

const mockUsers: UserData[] = [
  {
    id: '1',
    name: 'Alisher Karimov',
    email: 'alisher@example.com',
    phone: '+998901234567',
    role: 'user',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Sardor Rahimov',
    email: 'sardor@example.com',
    phone: '+998907654321',
    role: 'user',
    status: 'active',
    createdAt: '2024-01-20',
  },
];

export default function Users() {
  const [users] = useState<UserData[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1><FaUsers /> Foydalanuvchilar</h1>
          <p>Barcha foydalanuvchilarni boshqaring</p>
        </div>
      </div>

      <div className="page-toolbar">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Foydalanuvchilarni qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Ism</th>
              <th>Email</th>
              <th>Telefon</th>
              <th>Rol</th>
              <th>Holati</th>
              <th>Ro'yxatdan o'tgan</th>
              <th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td><strong>{user.name}</strong></td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td><span className="badge badge-info">{user.role}</span></td>
                <td>
                  <span className={`badge ${user.status === 'active' ? 'badge-success' : 'badge-danger'}`}>
                    {user.status === 'active' ? 'Faol' : 'Nofaol'}
                  </span>
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString('uz-UZ')}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-icon btn-edit"><FaEdit /></button>
                    <button className="btn-icon btn-delete"><FaTrash /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
