import { useState } from 'react';
import { FaImage, FaPlus, FaEdit, FaTrash, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import type { Banner } from '../types';
import './Banners.css';

const mockBanners: Banner[] = [
  {
    id: '1',
    title: 'Yangi kurslar',
    subtitle: 'Python va React kurslariga yoziling',
    image: '/banners/banner1.jpg',
    link: '/courses',
    order: 1,
    active: true,
  },
  {
    id: '2',
    title: 'Chegirmalar',
    subtitle: 'Barcha mahsulotlarga 20% chegirma',
    image: '/banners/banner2.jpg',
    link: '/products',
    order: 2,
    active: true,
  },
];

export default function Banners() {
  const [banners, setBanners] = useState<Banner[]>(mockBanners);

  const toggleActive = (id: string) => {
    setBanners(banners.map(banner =>
      banner.id === id ? { ...banner, active: !banner.active } : banner
    ));
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1><FaImage /> Bannerlar</h1>
          <p>Asosiy sahifa bannerlarini boshqaring</p>
        </div>
        <button className="btn-primary">
          <FaPlus /> Yangi banner
        </button>
      </div>

      <div className="banners-grid">
        {banners.map((banner) => (
          <div key={banner.id} className="banner-card">
            <div className="banner-image">
              <img src={banner.image} alt={banner.title} onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Banner';
              }} />
              <div className="banner-overlay">
                <h3>{banner.title}</h3>
                <p>{banner.subtitle}</p>
              </div>
            </div>
            <div className="banner-actions">
              <button
                className={`btn-toggle ${banner.active ? 'active' : ''}`}
                onClick={() => toggleActive(banner.id)}
              >
                {banner.active ? <FaToggleOn /> : <FaToggleOff />}
                {banner.active ? 'Faol' : 'Nofaol'}
              </button>
              <div className="action-buttons">
                <button className="btn-icon btn-edit"><FaEdit /></button>
                <button className="btn-icon btn-delete"><FaTrash /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
