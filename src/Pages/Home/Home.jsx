import React from 'react';
import './Home.css'


const Home = () => {
  return (
    <div className='main'>
      <div className="main-1">
        <h1>Добро пожаловать на главную страницу</h1>
        <div className="news">
          <h1>Новости</h1>
          <h3>Подготовка к Дню Науки в нашей школе!</h3>
          <ol><li>
            <p>Дорогие ученики, родители и учителя!

              С радостью объявляем, что 15 марта в нашей школе состоится традиционный День Науки!

              В этот день ребята примут участие в научных ярмарках, мастер-классах, а также представят свои проекты и исследования.

              В программе:

              Научные шоу с экспериментами;

              Выставка ученических проектов;

              Мастер-классы от преподавателей и гостей;

              Квесты и викторины.

              Приглашаем всех принять участие и проявить свой интерес к науке и творчеству.

              Время проведения: 10:00 – 14:00Место: актовый зал и кабинеты 2-го этажа.

              Будем рады видеть всех желающих!

              Администрация школы *
            </p></li></ol>
        </div>
      </div>
    </div>
  )
}


export default Home;