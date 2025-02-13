import './Presentation.css'

function Presentation() {
    const data = [
        {
            id: 1,
            title: "Израильская премьера спектакля «Вещи»,",
            text: "специально приехавшего к нам из Лондона. Режиссёр Сергей Карабань и актриса Дина Бердникова представят постановку, в которой каждое воспоминание оживает через личные истории.",
            link: "https://bukutoku.com/theatreprogramme",
            notes: "Подробности в разделе",
        }
    ]
    return(
        <section className="presentation__section">
            <div>
                <div></div>
                <div className="presentation__text-container">
                    <p className="presentation__text">Семейный книжный фестиваль «В Чемодане» представляет:</p>
                    <h2 className="presentation__title presentation__bold">«Пурим в музее»</h2>
                    <p className="presentation__text presentation__bold">16 марта, с 12:00 до 22:00</p>
                    <p className="presentation__text">АНУ – Музей еврейского народа, Тель-Авив</p>
                    <div className='presentation__fourhorizontalsquares'></div>
                </div>
                <div></div>
            </div>
            <h3>Что в программе?</h3>

            <ul className="presentation__wrapper">
                <li className="presentation__li">
                    <div className="presentation__li-arrow importantNotes__triangle-yellow-violet"></div>
                    <div className="presentation__li-text-container">
                        <p className="presentation__li-title">Израильская премьера спектакля «Вещи»,</p>
                            <span className="presentation__li-text"> специально приехавшего к нам из Лондона. Режиссёр Сергей Карабань и актриса Дина Бердникова представят постановку, в которой каждое воспоминание оживает через личные истории.  
                                <a className="presentation__li-link" href='https://bukutoku.com/theatreprogramme' target="_blank" rel="noopener noreferrer"> https://bukutoku.com/theatreprogramme</a>
                            </span>
                        
                        <p className="presentation__li-notes">Подробности в разделе</p>
                        <button className="presentation__li-btn">Важные примечания</button>
                        <div className="presentation__li-triangles"></div>
                    </div>
                </li>
            </ul>

        </section>
    )
}

export default Presentation