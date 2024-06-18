import scheduleFirstPart from '../../images/haifa/firstDayHaifa.png'
import scheduleSecondPart from '../../images/haifa/secondDayHaifa.png'
import '../Schedule/Schedule.css'
import '../Announce/Announce.css'
import {Link} from 'react-router-dom'
import schedule from '../../images/schedule.pdf'
import OneImg from '../Schedule/OneImg'

function ScheduleHaifa({handleCardClick}) {

    const arr = [
        {
            img: scheduleFirstPart,
            id: 122,
            name: "Расписание 1 день"
        },
        {
            img: scheduleSecondPart,
            id: 133,
            name: "Расписание 2 день"
        }
    ]

    return(
        <>
            <h1 className='schedule__title'>Расписание</h1>

            <div className="schedule__links-container">
                {/*<a className="schedule__btn" href='https://www.anumuseum.org.il/ru/events/purim-russian/' target="_blank" rel="noopener">
                    Купить билеты
                </a>
                <a href={schedule} download="Расписание.pdf" className="schedule__btn">
                    Скачать расписание
                </a>*/}
            </div>
            <div className='schedule__img-container'>
                {
                    arr.map((item) => (
                        <OneImg item={item} key={item.id} handleCardClick={handleCardClick}/>
                    ))
                }
            </div>
        </>
    )
}

export default ScheduleHaifa;