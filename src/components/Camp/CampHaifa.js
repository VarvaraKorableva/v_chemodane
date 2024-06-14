import './CampHaifa.css'

function CampHaifa() {
    return(
        <section className="camp-haifa__section" id='camp-haifa'>
            <h2 className="camp-haifa__title">КАЙТАНА</h2>
            {/*<button>Купить билеты</button>
            <div className="camp-haifa__main-text-container">
                <p className="camp-haifa__main-text">Мы ждём ребят 5-8 лет, с 14.00 до 19.00, чтобы приоткрыть для них двери в наш "Сказочный мир В чемодане".</p>
                <p>Целых два дня мы будем творить, фантазировать, дружить и весело играть!</p>
                <p>Сделаем невероятной красоты шляпы из крафтовой бумаги, создадим уникальную карту Сказочного Мира - которая станет основой для нашей собственной настольной игры. После прохождения игры нас ждёт особенный сюрприз!</p>
                <p>Во время нашего путешествия по сказочным мирам дети успеют познакомиться и подружиться, активно включиться в подвижные игры - в помещении и на улице, поиграть в увлекательные настолки, а вечером конечно же расслабиться и вдумчиво почитать хорошую книжку (без этого на фестивале В чемодане никак нельзя обойтись!)
                    Для нас очень важно, чтобы всем детям было комфортно в этом путешествии - мы внимательны к состоянию каждого участника нашей сказочной команды. Мы строим программу так, чтобы ребята поочередно занимались самыми разными видами деятельности - это позволяет им не скучать, но и не перегружаться.
                    Конечно же мы позаботились о горячем вкусном обеде и легких перекусах для всех наших сказочных путешественников - ведь голодному с таким приключением точно не справиться!</p>
                <p>Конечно же мы позаботились о горячем вкусном обеде и легких перекусах для всех наших сказочных путешественников - ведь голодному с таким приключением точно не справиться!</p>    
                <p>Вместе с детьми в Сказочное путешествие отправятся надёжные взрослые, творческие и мудрые наставники-мадрихи:</p>
                <p>Александра Смит – игровой педагог, ведущая групп Мышематики. В Хайфе ведет "Умную Продленку" для детей 4-9 лет, вдохновитель и организатор слета Туристят в Хайфе
                    Анна Перепелкина - педагог неформального образования, ведущая проекта "Умная продленка" в Хайфе, ведущая адаптационной группы для малышей, педагог Мышематики</p>
                <p>Будьте внимательны - количество мест в нашей команде ограничено (не более 15 человек в день).</p>   
                <p>Обед, перекусы, вода и незабываемые впечатления - включены!</p> 
                <p>А пока младшие дети путешествуют по сказочным мирам, их родители и старшие братья и сестра могут погулять по маркету, выбрать лучшие книжки и подарки и поучаствовать в разнообразной программе фестиваля.</p>


            </div>*/}
            
            
            <div className="camp-haifa__main-container">
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
            </div>
        </section>
        
    )
}

export default CampHaifa;
