import './NewSchedule.css'
import scheduleFirstPart from '../../../images/scheduleFirstPart.png'
import scheduleSecondPart from '../../../images/scheduleSecondPart.png'

function NewSchedule({handleCardClick}) {

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
                <p className="section__date" onClick={onTwentyFourCardClick}>24 МАРТА</p>
                <p className="section__date" onClick={onTwentyFiveClick}>25 МАРТА</p>
            </div>

        </section>
    )
}

export default NewSchedule;