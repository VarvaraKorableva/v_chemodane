import './CampHaifa.css'
import { HashLink as Link } from 'react-router-hash-link'
import Anna from '../../images/haifa/AnnaPeredelkina.jpg'
import Sasha from '../../images/haifa/SashaSmit.jpg'

function CampHaifa() {
    return(
        <section className="camp-haifa__section" id='camp-haifa'>
            <div className="camp-haifa__title-and-btn-container">
                <h2 className="camp-haifa__title">КАЙТАНА</h2>
                <Link to='https://eventbuzz.co.il/lp/event/kaitana' target="_blank" className="camp-haifa__link-btn">Купить билеты</Link>
            </div>
            <h2 className='camp-haifa__subtitle'>Ждём ребят 5-8 лет, с 14.00 до 19.00</h2>
            <ul className="camp-haifa__wrapper">
                <li className="camp-haifa__container">
                    <h3>День 1</h3>
                    <ul className="camp-haifa__second-wrapper">
                        <li className="camp-haifa__second-container"><span className='camp-haifa__time'>14:00-14:30</span> Сбор детей, игры на знакомство</li>
                        <li className="camp-haifa__second-container"><span className='camp-haifa__time'>14:30-16:00</span> МК "Сказочные шляпы"</li>
                        <li className="camp-haifa__second-container"><span className='camp-haifa__time'>16:00-16:30</span> Обед</li>
                        <li className="camp-haifa__second-container"><span className='camp-haifa__time'>16:30-17:30</span> Прогулка, активные игры</li>
                        <li className="camp-haifa__second-container"><span className='camp-haifa__time'>17:30-17:45</span> Перекус</li>
                        <li className="camp-haifa__second-container"><span className='camp-haifa__time'>17:45-19:00</span> Настольные игры, чтение</li>
                    </ul>
                </li>
                <li className="camp-haifa__container">
                    <h3>День 2</h3>
                        <ul className="camp-haifa__second-wrapper">
                            <li className="camp-haifa__second-container"><span className='camp-haifa__time'>14:00-14:30</span> Сбор детей, игры на взаимодействие</li>
                            <li className="camp-haifa__second-container"><span className='camp-haifa__time'>14:30-16:00</span> Создаем кооперативную настольную игру</li>
                            <li className="camp-haifa__second-container"><span className='camp-haifa__time'>16:00-16:30</span> Обед</li>
                            <li className="camp-haifa__second-container"><span className='camp-haifa__time'>16:30-17:30</span> Прогулка, активные игры</li>
                            <li className="camp-haifa__second-container"><span className='camp-haifa__time'>17:30-17:45</span> Перекус</li>
                            <li className="camp-haifa__second-container"><span className='camp-haifa__time'>17:45-18:45</span> Настольные игры, чтение</li>
                            <li className="camp-haifa__second-container"><span className='camp-haifa__time'>18:45-19:00</span> Завершающий круг</li>
                        </ul>
                </li>
            </ul>
            <div className='camp-haifa__orange-star'></div>
            <div className='camp-haifa__second-orange-star'></div>
            <div className='camp-haifa__third-orange-star'></div>
            <div className='camp-haifa__fourth-orange-star'></div>
            <div className='camp-haifa__fifth-orange-star'></div>

             

            <p className='camp-haifa__subtitle-hosts'>Ведущие:</p>
            <ul className='camp-haifa__wrapper-hosts'>
                <li className='camp-haifa__container-hosts'>
                    <img src={Sasha} className='camp-haifa__host-pic'></img>
                    <p className='camp-haifa__host-name'>Александра Смит</p>
                    <p>Игровой педагог, ведущая групп Мышематики. В Хайфе ведет "Умную Продленку" для детей 4-9 лет, вдохновитель и организатор слета Туристят в Хайфе</p>
                </li>
                <li className='camp-haifa__container-hosts'>
                    <img src={Anna} className='camp-haifa__host-pic'></img>
                    <p className='camp-haifa__host-name'>Анна Перепелкина</p>
                    <p>Педагог неформального образования, ведущая проекта "Умная продленка" в Хайфе, ведущая адаптационной группы для малышей, педагог Мышематики</p>
                </li>
            </ul>

            <p>Стоимость программы - один день 300 ₪, оба дня – 500 ₪</p>
            <p>Обед, перекусы, вода и незабываемые впечатления - включены!</p>       
        </section>
        
    )
}

export default CampHaifa;
