import './Teachers.css';
import React from 'react';

const Teachers = () => {
  return (
    <div className="main">
     
      <div className="top-row">
        <div className="card-client">
          <div className="user-picture">
            <img className='img' src="/maxut.jpg" alt="" />
          </div>
          <p className="name-client">Курбатов Максим
            <span>Зам. Директор</span>
          </p>
        </div>

        <div className="card-client">
          <div className="user-picture">
            <img className='img' src="/ceo.jpg" alt="" />
          </div>
          <p className="name-client">Абдикаримов Тимур
            <span>Директор</span>
          </p>
        </div>

        <div className="card-client">
          <div className="user-picture">
            <img className='img' src="/nur.jpg" alt="" />
          </div>
          <p className="name-client">Суйунбеков Нурбол
            <span>Зам. Директор</span>
          </p>
        </div>
      </div>

      {/* Контейнер для фиолетовой карточки */}
      <div className="middle">
        <div className="card-client">
          <div className="user-picture">
            <img className='img' src="/san.jpg" alt="" />
          </div>
          <p className="name-client">Казыбеков Санжар
            <span>Учитель Физкультуры</span>
          </p>
        </div>
        <div className="card-client">
          <div className="user-picture">
            <img className='img' src="/Adi.jpg" alt="" />
          </div>
          <p className="name-client">Сатымкулов Адилхан
            <span>Президент Школы</span>
          </p>
        </div>
        <div className="card-client">
          <div className="user-picture">
            <img className='img' src="/Iliyar.jpg" alt="" />
          </div>
          <p className="name-client">Мидинов Илияр
            <span>Учитель Английского</span>
          </p>
        </div>
      </div>
      <div className="middle  ">
        <div className="card-client">
          <div className="user-picture">
            <img className='img' src="/aktan.jpg" alt="" />
          </div>
          <p className="name-client">Кашымбеков Актан
            <span>Учитель Химии</span>
          </p>
        </div>
        <div className="card-client">
          <div className="user-picture">
            <img className='img' src="/jib.jpg" alt="" />
          </div>
          <p className="name-client">Кенжебекова Жибек
            <span>Учительница ОБЖ</span>
          </p>
        </div>
        <div className="card-client">
          <div className="user-picture">
            <img className='img' src="/Ibro.jpg" alt="" />
          </div>
          <p className="name-client"> Абдраимов Иброхим
            <span>Учитель физики</span>
          </p>
        </div>

      </div>
      <div className="bottom-row">

        <div className="card-client">
          <div className="user-picture">
            <img className='img1' src="/myr.jpg" alt="" />
          </div>
          <p className="name-client">Нурбаев Мырзабек
            <span>Учитель Информатики</span>
          </p>
        </div>

        <div className="card-client">
          <div className="user-picture">
            <img className='img1' src="/Anvar.jpg" alt="" />
          </div>
          <p className="name-client">Кумушбеков Анвар
            <span>Учитель Математики</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Teachers;
