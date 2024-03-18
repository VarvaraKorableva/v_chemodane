import scheduleFirstPart from '../../images/scheduleFirstPart.png'
import scheduleSecondPart from '../../images/scheduleSecondPart.png'
import './Schedule.css'
import '../Announce/Announce.css'
import {Link} from 'react-router-dom'
//import announcementPic from '../../images/purim.png'
import schedule from '../../images/schedule.pdf'
import OneImg from './OneImg'

function Schedule({handleCardClick}) {

    const arr = [
        {
            img: scheduleFirstPart,
            id: 12,
            name: "Расписание 1 день"
        },
        {
            img: scheduleSecondPart,
            id: 13,
            name: "Расписание 2 день"
        }
    ]

    return(
        <>
            <h1 className='schedule__title'>Расписание</h1>

            <div className="schedule__links-container">
                <a className="schedule__btn" href='https://www.anumuseum.org.il/ru/events/purim-russian/' target="_blank">
                    Купить билеты
                </a>
                <a href={schedule} download="Расписание.pdf" className="schedule__btn">
                    Скачать расписание
                </a>
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

export default Schedule;