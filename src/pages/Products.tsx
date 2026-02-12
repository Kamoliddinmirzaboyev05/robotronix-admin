import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaBox } from 'react-icons/fa';
import type { Product } from '../types';
import './Products.css';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Arduino Uno R3',
    description: 'Mikrocontroller board',
    price: 85000,
    category: 'Mikrocontrollerlar',
    image: '/products/arduino.jpg',
    stock: 45,
    createdAt: '2024-01-10',
  },
  {
    id: '2',
    name: 'Raspberry Pi 4',
    description: 'Mini kompyuter',
    price: 650000,
    category: 'Kompyuterlar',
    image: '/products/raspberry.jpg',
    stock: 23,
    createdAt: '2024-01-15',
  },
];

export default function Products() {
  const [products] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1><FaBox /> Mahsulotlar</h1>
          <p>Barcha mahsulotlarni boshqaring</p>
        </div>
        <button className="btn-primary">
          <FaPlus /> Yangi mahsulot
        </button>
      </div>

      <div className="page-toolbar">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Mahsulotlarni qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Product';
              }} />
              <span className={`stock-badge ${product.stock > 20 ? 'in-stock' : 'low-stock'}`}>
                {product.stock} dona
              </span>
            </div>
            <div className="product-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{product.price.toLocaleString()} so'm</span>
                <div className="action-buttons">
                  <button className="btn-icon btn-edit"><FaEdit /></button>
                  <button className="btn-icon btn-delete"><FaTrash /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
