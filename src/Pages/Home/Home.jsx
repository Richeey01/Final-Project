import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className='main'> <h1>Добро пожаловать на главную страницу</h1>
      <div id='map'>
        <h2 >Наш адрес: улица Исы Ахунбаева, 125/2</h2>
        <div className='map' style={{ position: "relative", overflow: "hidden" }}><a href="https://yandex.com/maps/org/mezhdunarodny_universitet_it_i_biznesa_salymbekov_universitet/66522248690/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Международный университет IT и бизнеса Салымбеков Университет</a>
          <a href="https://yandex.com/maps/10309/bishkek/category/university/184106140/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>ВУЗ в Бишкеке</a>
          <iframe src="https://yandex.com/map-widget/v1/?ll=74.599518%2C42.843478&mode=poi&poi%5Bpoint%5D=74.600128%2C42.844206&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D66522248690&z=17.7" width="560" height="400" frameborder="1" allowfullscreen="true" style={{ position: "relative" }}></iframe>
        </div>
      </div>
    </div>
  )
}

export default Home;
