import Heading from '../../../../UI-Kit/Heading/Heading'
import schedulefirstday from '../../../../images//hanukkah/schedulefirstday.png'
import schedulesecondday from '../../../../images/hanukkah/schedulesecondday.png'
import schedule from '../../../../images/hanukkah/schedulehanukkah2024.pdf'
import './ScheduleSection.css'

function ScheduleSection( {handleCardClick} ) {

    function onFirstDayClick() {
        handleCardClick(schedulefirstday)
    }

    function onSecondDayClick() {
        handleCardClick(schedulesecondday)
    }


    return(
        <section className="schedule_section" id='schedulehanukkah'>
            <div className="schedule_section_header_and_btn_container">
                <Heading>РАСПИСАНИЕ</Heading>

                <div className="schedule_section_zig_zag"></div>
                <a href={schedule} download="Расписание.pdf" className="schedule_section_btn">
                    Скачать расписание
                </a>
            </div>

            
                
            <div className="schedule_section__date-container">
                <div className="schedule_section_left_side_stars"></div>
                <p className="schedule_section__date" onClick={onFirstDayClick}>26 ДЕКАБРЯ</p>
                <p className="schedule_section__date" onClick={onSecondDayClick}>27 ДЕКАБРЯ</p>
                <div className="schedule_section_right_side_stars"></div>
            </div>
                
            


        </section>
    )
}

export default ScheduleSection