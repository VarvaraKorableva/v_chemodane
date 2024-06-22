import './HaifaSchedule.css'
import scheduleFirstPart from '../../images/haifa/firstDayHaifa.png'
import scheduleSecondPart from '../../images/haifa/secondDayHaifa.png'

function HaifaSchedule({handleCardClick}) {

    function onTwentyFourCardClick() {
        handleCardClick(scheduleFirstPart)
    }

    function onTwentyFiveClick() {
        handleCardClick(scheduleSecondPart)
    }


    return(
        <section className="section__schedule" id='schedule'>
            <h3 className="section__title">РАСПИСАНИЕ</h3>
            <div className="section__date-container">
                <p className="haifa-section__date" onClick={onTwentyFourCardClick}>1 ИЮЛЯ</p>
                <p className="haifa-section__date" onClick={onTwentyFiveClick}>2 ИЮЛЯ</p>
            </div>

        </section>
    )
}

export default HaifaSchedule;