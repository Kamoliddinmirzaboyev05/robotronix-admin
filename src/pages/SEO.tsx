import { useState } from 'react';
import { FaSearch, FaSave } from 'react-icons/fa';
import type { SEOSettings } from '../types';
import './SEO.css';

const pages = [
  { id: 'home', name: 'Bosh sahifa' },
  { id: 'courses', name: 'Kurslar' },
  { id: 'products', name: 'Mahsulotlar' },
  { id: 'about', name: 'Biz haqimizda' },
  { id: 'contact', name: 'Aloqa' },
];

export default function SEO() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [settings, setSettings] = useState<SEOSettings>({
    pageTitle: 'Robotronix - Robotika va Dasturlash Kurslari',
    metaDescription: 'Robotika, dasturlash va elektronika bo\'yicha professional kurslar va mahsulotlar',
    metaKeywords: 'robotika, dasturlash, python, react, arduino, raspberry pi',
  });

  const handleSave = () => {
    alert('SEO sozlamalari saqlandi!');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1><FaSearch /> SEO Sozlamalar</h1>
          <p>Sayt sahifalari uchun SEO ma\'lumotlarini sozlang</p>
        </div>
        <button className="btn-primary" onClick={handleSave}>
          <FaSave /> Saqlash
        </button>
      </div>

      <div className="seo-layout">
        <div className="pages-list">
          <h3>Sahifalar</h3>
          {pages.map((page) => (
            <button
              key={page.id}
              className={`page-item ${selectedPage === page.id ? 'active' : ''}`}
              onClick={() => setSelectedPage(page.id)}
            >
              {page.name}
            </button>
          ))}
        </div>

        <div className="seo-form">
          <div className="form-group">
            <label htmlFor="pageTitle">Sahifa sarlavhasi (Title)</label>
            <input
              type="text"
              id="pageTitle"
              value={settings.pageTitle}
              onChange={(e) => setSettings({ ...settings, pageTitle: e.target.value })}
              placeholder="Sahifa sarlavhasi"
            />
            <span className="char-count">{settings.pageTitle.length} / 60</span>
          </div>

          <div className="form-group">
            <label htmlFor="metaDescription">Meta tavsif (Description)</label>
            <textarea
              id="metaDescription"
              value={settings.metaDescription}
              onChange={(e) => setSettings({ ...settings, metaDescription: e.target.value })}
              placeholder="Sahifa tavsifi"
              rows={4}
            />
            <span className="char-count">{settings.metaDescription.length} / 160</span>
          </div>

          <div className="form-group">
            <label htmlFor="metaKeywords">Kalit so'zlar (Keywords)</label>
            <input
              type="text"
              id="metaKeywords"
              value={settings.metaKeywords}
              onChange={(e) => setSettings({ ...settings, metaKeywords: e.target.value })}
              placeholder="kalit, so'zlar, vergul bilan"
            />
          </div>

          <div className="seo-preview">
            <h4>Google qidiruv natijasi ko'rinishi:</h4>
            <div className="preview-box">
              <div className="preview-title">{settings.pageTitle}</div>
              <div className="preview-url">https://robotronix.uz/{selectedPage}</div>
              <div className="preview-description">{settings.metaDescription}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
