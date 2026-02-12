import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaBook } from 'react-icons/fa';
import type { Course } from '../types';
import './Courses.css';

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Python Dasturlash Asoslari',
    description: 'Python dasturlash tilini 0 dan o\'rganing',
    price: 500000,
    duration: '3 oy',
    level: 'Boshlang\'ich',
    category: 'Dasturlash',
    image: '/courses/python.jpg',
    instructor: 'Alisher Karimov',
    students: 156,
    rating: 4.8,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Web Dasturlash - React',
    description: 'React.js yordamida zamonaviy web ilovalar yarating',
    price: 750000,
    duration: '4 oy',
    level: 'O\'rta',
    category: 'Dasturlash',
    image: '/courses/react.jpg',
    instructor: 'Sardor Rahimov',
    students: 203,
    rating: 4.9,
    createdAt: '2024-02-01',
  },
];

export default function Courses() {
  const [courses] = useState<Course[]>(mockCourses);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1><FaBook /> Kurslar</h1>
          <p>Barcha kurslarni boshqaring</p>
        </div>
        <button className="btn-primary">
          <FaPlus /> Yangi kurs
        </button>
      </div>

      <div className="page-toolbar">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Kurslarni qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Kurs nomi</th>
              <th>Narxi</th>
              <th>Davomiyligi</th>
              <th>Daraja</th>
              <th>O'quvchilar</th>
              <th>Reyting</th>
              <th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.id}>
                <td>
                  <div className="course-info">
                    <strong>{course.title}</strong>
                    <span>{course.instructor}</span>
                  </div>
                </td>
                <td>{course.price.toLocaleString()} so'm</td>
                <td>{course.duration}</td>
                <td><span className="badge badge-info">{course.level}</span></td>
                <td>{course.students}</td>
                <td>⭐ {course.rating}</td>
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
