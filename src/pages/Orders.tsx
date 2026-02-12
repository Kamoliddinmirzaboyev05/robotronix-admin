import { useState } from 'react';
import { FaShoppingCart, FaEye } from 'react-icons/fa';
import type { Order } from '../types';
import './Orders.css';

const mockOrders: Order[] = [
  {
    id: '1',
    userId: 'user1',
    items: [
      { productId: '1', productName: 'Arduino Uno R3', quantity: 2, price: 85000 },
    ],
    total: 170000,
    status: 'pending',
    createdAt: '2024-02-10T10:30:00',
  },
  {
    id: '2',
    userId: 'user2',
    items: [
      { productId: '2', productName: 'Raspberry Pi 4', quantity: 1, price: 650000 },
    ],
    total: 650000,
    status: 'completed',
    createdAt: '2024-02-09T14:20:00',
  },
];

export default function Orders() {
  const [orders] = useState<Order[]>(mockOrders);

  const getStatusBadge = (status: Order['status']) => {
    const badges = {
      pending: { label: 'Kutilmoqda', class: 'badge-warning' },
      processing: { label: 'Jarayonda', class: 'badge-info' },
      completed: { label: 'Bajarildi', class: 'badge-success' },
      cancelled: { label: 'Bekor qilindi', class: 'badge-danger' },
    };
    return badges[status];
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1><FaShoppingCart /> Buyurtmalar</h1>
          <p>Barcha buyurtmalarni ko'ring</p>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Mahsulotlar</th>
              <th>Jami summa</th>
              <th>Holati</th>
              <th>Sana</th>
              <th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>
                  <div className="order-items">
                    {order.items.map((item, idx) => (
                      <div key={idx}>
                        {item.productName} x{item.quantity}
                      </div>
                    ))}
                  </div>
                </td>
                <td><strong>{order.total.toLocaleString()} so'm</strong></td>
                <td>
                  <span className={`badge ${getStatusBadge(order.status).class}`}>
                    {getStatusBadge(order.status).label}
                  </span>
                </td>
                <td>{new Date(order.createdAt).toLocaleDateString('uz-UZ')}</td>
                <td>
                  <button className="btn-icon btn-view"><FaEye /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
