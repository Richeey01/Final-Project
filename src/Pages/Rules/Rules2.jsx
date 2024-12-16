import React from 'react'
import { Link } from 'react-router-dom'
import './Rules.css'

const Rules2 = () => {
    return (
        <div className="main-r">
            <div className="rules"><h3>Правила №2</h3>
                <div className="link-b">
                    <Link to="/rules">№1     </Link>  
                    <Link to="/rules2">№2</Link>
                </div>
                <h1>Правила нахождения на территории Школы</h1>
                <ol>
                    <li>Приходите в школу вовремя
                    </li><br />
                    <li>Соблюдайте чистоту
                    </li><br />
                    <li>Уважайте всех
                    </li><br />
                    <li>Следуйте установленным правилам
                    </li><br />
                    <li>Не бегайте в коридорах
                    </li><br />
                    <li>Берегите школьное имущество
                    </li><br />
                    <li>Соблюдайте тишину в учебных зонах
                    </li><br />
                    <li>Не покидайте территорию школы без разрешения
                    </li><br />
                    <li>Соблюдайте правила безопасности
                    </li><br />
                    <li>Не приносите запрещенные предметы
                    </li><br />
                    <li>Будьте вежливы
                    </li><br />
                    <li>Соблюдайте дресс-код
                    </li><br />
                    <li>Не нарушайте порядок
                    </li><br />
                    <li>Соблюдайте переходы по расписанию
                    </li><br />
                    <li>Поддерживайте дружескую атмосферу
                    </li>

                </ol>
            </div>
        </div>
    )
}

export default Rules2