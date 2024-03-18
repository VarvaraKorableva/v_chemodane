import './AboutFestival.css'
import firstPic from '../../images/aboutFesImages/firstPic.jpg'
import secondPic from '../../images/aboutFesImages/secondPic.jpg'
import thirdPic from '../../images/aboutFesImages/thirdPic.jpeg'
import fifthPic from '../../images/aboutFesImages/fifthPic.jpg'
import sixPic from '../../images/aboutFesImages/sixPic.jpg'

function AboutFestival() {
    return(
        <section className="aboutFestival__main-container" id='festival'>
          <h2 className="aboutFestival__main-title">О фестивале</h2>

          <div className="aboutFestival__text-container">
            <div className="aboutFestival__text-wrapper">
                <img src={firstPic} className="aboutFestival__img"></img>
                <p className="aboutFestival__text">
                В дни Пурима 24-25 марта в музее Ану в Тель Авиве, при поддержке фонда НАДАВ, пройдет большой двухдневный фестиваль “В чемодане”, 
                посвященный театру, кино и, конечно, Пуриму – самому любимому и веселому еврейскому празднику!
                </p>
            </div>
            <div className="aboutFestival__text-wrapper-second">
                <div className="aboutFestival__text">
                    <p>
                        За программу мастер-классов отвечают ребята из проекта “КейтАНУ”. В оба дня программы, профессиональные мадрихи (ведущие) КейтАНУ организуют переход ребят 6-9 лет между разными активностями, и находятся на связи с родителями, в случае необходимости. Это значит, что по вашему запросу ребята будут под присмотром, и вы не будете обязаны находится с ними во время программы. Эта услуга входит в стоимость билета, но количество мест для сопровождения ограничено.
                    </p>
                    <p>Вас ждут спектакли от театров “Алеф”, “Дом черной совы”, “Рыба кива”, “Театрон Самеах” и режиссера Марфы Горвиц. Кинопоказы документальных и художественных фильмов, встречи с писателями и актерами Евгенией Додиной, Романом Качановым, Линор Горалик, Борисом Лейбовым, Эшколем Нево, Максимом Кронгаузом и многими другими.</p>
                </div>
                <img src={thirdPic} className="aboutFestival__img"></img>
            </div>
            <div className="aboutFestival__text-wrapper">
                <img src={sixPic} className="aboutFestival__img"></img>
                <p className="aboutFestival__text">
                Для вашего удобства мы создали несколько видов билетов: абонементы для детей и взрослых с полным доступом на все мероприятия в течение одного или двух дней, а также самый базовый билет с доступом только в зал Тиш, без возможности участия в спектаклях и мастер-классах проходящие вне зала.
                </p>
            </div>

                <p className="aboutFestival__last-text">
                Вход на фестиваль для детей до 3 лет, в сопровождении родителей, бесплатный.
                </p>
                
          </div>
        </section>
    )
}

export default AboutFestival;

//<img src={fifthPic} className="aboutFestival__img"></img>
