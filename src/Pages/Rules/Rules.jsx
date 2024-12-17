import React from 'react'
import { Link } from 'react-router-dom'
import './Rules.css'



const Rules = () => {
    return (
        <div className="main-r">
            <div className="rules"><h3>Правила №1</h3>
                <div className="link-b">
                    <Link to="/rules">№1     </Link>
                    <Link to="/rules2">№2</Link>
                </div>
                <h1>Правила по время проведения урока</h1>
                <ol>
                    <li>Приходите вовремя
                    </li><br />
                    <li>Приготовьте все необходимое
                    </li><br />
                    <li>Выключайте мобильные телефоны
                    </li><br />
                    <li>Уважайте учителя и одноклассников
                    </li><br />
                    <li>Соблюдайте тишину
                    </li><br />
                    <li>Поднимайте руку, чтобы задать вопрос
                    </li><br />
                    <li>Следуйте указаниям учителя
                    </li><br />
                    <li>Не отвлекайте других
                    </li><br />
                    <li>Будьте активны
                    </li><br />
                    <li>Соблюдайте порядок на рабочем месте
                    </li><br />
                    <li>Не употребляйте еду и напитки
                    </li><br />
                    <li>Относитесь бережно к учебным материалам
                    </li><br />
                    <li>Соблюдайте дресс-код
                    </li><br />
                    <li>Делайте заметки
                    </li><br />
                    <li>Будьте терпеливы
                    </li>

                </ol>
            </div>
        </div>
    )
}

export default Rules