import scheduleFirstPart from '../../images/scheduleFirstPart.png'
import scheduleSecondPart from '../../images/scheduleSecondPart.png'
import './Schedule.css'
import '../Announce/Announce.css'
import {Link} from 'react-router-dom'
import announcementPic from '../../images/purim.png'
import schedule from '../../images/schedule.pdf'

function Schedule({handleCardClick}) {
    
    function onHandleCardClick() {
        handleCardClick(scheduleFirstPart)
        console.log(scheduleFirstPart)
    }

    return(
        <>
            <h1 className='schedule__title'>Расписание</h1>

            <div className="schedule__links-container">
                <a className="schedule__btn" href='https://www.anumuseum.org.il/ru/events/purim-russian/' target="_blank">
                    Купить билеты
                </a>
                <a href={schedule} download="WebDeveloper_KorablevaVarvara.pdf" className="schedule__btn">
                    Скачать расписание
                </a>
            </div>
            <div className='schedule__img-container'>
                <img src={scheduleFirstPart} alt='Расписание часть первая' className='schedule__img' onClick={onHandleCardClick}></img>
                <img src={scheduleSecondPart} alt='Расписание часть вторая' className='schedule__img' onClick={onHandleCardClick}></img>
            </div>
        </>
    )
}

export default Schedule;