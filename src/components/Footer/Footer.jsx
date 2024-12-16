import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Наши социальные сети</h3>
          <Link className='link-f' to='*'>Инстаграм</Link>
          <Link className='link-f' to='*'>Одноклассники</Link>
          <Link className='link-f' to='*'>Телеграмм</Link>
          <Link className='link-f' to='*'>Фейсбук</Link>
        </div>
    
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Email: info@lightofknowledge.com</p>
          <p>Телефон: +996 000 000 000</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Свет Знаний. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
