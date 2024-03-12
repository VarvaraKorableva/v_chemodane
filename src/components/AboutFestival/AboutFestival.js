import './AboutFestival.css'
import firstPic from '../../images/aboutFesImages/firstPic.jpg'
import secondPic from '../../images/aboutFesImages/secondPic.jpg'
import thirdPic from '../../images/aboutFesImages/thirdPic.jpeg'
import fifthPic from '../../images/aboutFesImages/fifthPic.jpg'
import sixPic from '../../images/aboutFesImages/sixPic.jpg'

function AboutFestival() {
    return(
        <section className="aboutFestival__main-container">
          <h2 className="aboutFestival__main-title">О фестивале</h2>

          <div className="aboutFestival__text-container">
            <div className="aboutFestival__text-wrapper">
                <img src={firstPic} className="aboutFestival__img"></img>
                <p className="aboutFestival__text">
                В дни Пурима 24-25 марта в музее Ану в Тель Авиве пройдет большой двухдневный фестиваль 
                "В чемодане", посвященный театру, кино и, конечно, Пуриму – самому любимому 
                и веселому еврейскому празднику!
                </p>
            </div>
            <div className="aboutFestival__text-wrapper">
                <p className="aboutFestival__text">Вас ждут спектакли от театров "Алеф", "Дом черной совы", "Рыба кива", "Театрон Самеах" и режиссера Марфы Горвиц. 
                Кинопоказы документальных и художественных фильмов, встречи с писателями и актерами Евгенией Додиной,  Линор Горалик, 
                Борисом Лейбовым, Эшколем Нево, Максимом Кронгаузом и многими другими.
                </p>
                <img src={secondPic} className="aboutFestival__img"></img>
            </div>
            <div className="aboutFestival__text-wrapper">
                <img src={thirdPic} className="aboutFestival__img"></img>
                <p className="aboutFestival__text">
                В этом удивительном лагере детей ждет множество творческих и увлекательных мастер-классов: 
                от создания пуримских костюмов и выпечки "ушей Амана" до мастерства пуримского макияжа и создания объемных масок. 
                Также в программе авторский чай, бумажные марионетки и захватывающие игры, например мафия и квидич. В ительном лагере детей 
                ждет множество творческих и увлекательных мастер-классов: от создания пуримских костюмов и выпечки "ушей Амана" до мастерства 
                пуримского макияжа и создания объемных масок. Также в программе авторский чай, бумажные марионетки и захватывающие игры, например хмафия и квидич.
                </p>
            </div>
            <div className="aboutFestival__text-wrapper">
                <p className="aboutFestival__text">
                За программу мастер-классов отвечают ребята из проекта "КейтАНУ". Оба дня фестиваля для детей 8-14 лет будет работать полноценная кайтана! 
                Взрослые смогут отправить туда ребенка, а сами побродить по маркету, выбрать себе (и детям, конечно же!) книжки, украшения, вещицы для дома, угощения. 
                Или посмотреть кино, послушать выдающихся режиссеров и писателей, посмотреть спектакли или сами сходить на мастер-классы!
                </p>
                <img src={fifthPic} className="aboutFestival__img"></img>
            </div>
            <div className="aboutFestival__text-wrapper">
                
                <p className="aboutFestival__text">
                В рамках фестиваля «В чемодане. Пурим в музее» приглашаем ваших детей на двухдневный дневной лагерь КейтАНУ
                </p>
            </div>
            <div className="aboutFestival__text-wrapper">
                <p className="aboutFestival__text">
                В этом удивительном лагере детей ждет множество творческих и увлекательных мастер-классов: от создания пуримских костюмов и выпечки "ушей Амана" до мастерства 
                пуримского макияжа и создания объемных масок. Также в программе авторский чай, бумажные марионетки и захватывающие игры, например мафия и квидич.
                </p>
            </div>
            <div className="aboutFestival__text-wrapper">
                <img src={sixPic} className="aboutFestival__img"></img>
                <p className="aboutFestival__text">
                Кроме того, в программе театральные постановки и специальные детские экскурсии по музею, которые помогут 
                больше узнать о культуре и истории еврейского народа. Это отличная возможность для детей завести новые знакомства и встретить старых друзей, 
                общаться и творить вместе. Для всех участников лагеря предусмотрен обед. Лагерь открыт для детей и подростков от 8 до 14 лет. 
                </p>
            </div>
            <div className="aboutFestival__text-wrapper">
                <p className="aboutFestival__text">
                Пока опытные профессиональные ведущие групп проводят время с детьми, их родители смогут наслаждаться книжным маркетом и взрослой программой фестивалем "В Чемодане"
                </p>
            </div>
          </div>
        </section>
    )
}

export default AboutFestival;
