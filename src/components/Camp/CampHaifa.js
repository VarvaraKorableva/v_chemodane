import './CampHaifa.css'

function CampHaifa() {
    return(
        <section className="camp-haifa__section" id='camp-haifa'>
            <h2 className="camp-haifa__title">КАЙТАНА</h2>
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
        </section>
        
    )
}

export default CampHaifa;
