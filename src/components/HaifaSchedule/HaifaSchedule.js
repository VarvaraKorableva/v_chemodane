import './HaifaSchedule.css'
import scheduleFirstPart from '../../images/haifa/firstDayHaifa.png'
import scheduleSecondPart from '../../images/haifa/secondDayHaifa.png'
import schedule from '../../images/haifa/scheduleHaifa.pdf'

function HaifaSchedule({handleCardClick}) {

    function onTwentyFourCardClick() {
        handleCardClick(scheduleFirstPart)
    }

    function onTwentyFiveClick() {
        handleCardClick(scheduleSecondPart)
    }


    return(
        <section className="section__schedule" id='schedule'>
            <div className="section-haifa__title-container">
                <h3 className="section-haifa__title">РАСПИСАНИЕ</h3>
                <a href={schedule} download="Расписание.pdf" className="haifa-schedule__btn">
                    Скачать расписание
                </a>
            </div>

            <div className="section-haifa__date-container">
                <p className="haifa-section__date" onClick={onTwentyFourCardClick}>1 ИЮЛЯ</p>
                <p className="haifa-section__date" onClick={onTwentyFiveClick}>2 ИЮЛЯ</p>
            </div>



        </section>
    )
}

export default HaifaSchedule;