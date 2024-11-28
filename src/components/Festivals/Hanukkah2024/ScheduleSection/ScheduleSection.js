import Heading from '../../../../UI-Kit/Heading/Heading'
import scheduleFirstPart from '../../../../images/haifa/firstDayHaifa.png'
import scheduleSecondPart from '../../../../images/haifa/secondDayHaifa.png'
import schedule from '../../../../images/haifa/scheduleHaifa.pdf'
import './ScheduleSection.css'

function ScheduleSection(handleCardClick) {

    function onTwentyFourCardClick() {
        handleCardClick(scheduleFirstPart)
    }

    function onTwentyFiveClick() {
        handleCardClick(scheduleSecondPart)
    }


    return(
        <section className="schedule_section" id='schedule'>
            <div className="schedule_section_header_and_btn_container">
                <Heading>РАСПИСАНИЕ</Heading>

                <div className="schedule_section_zig_zag"></div>
                <div download="Расписание.pdf" className="schedule_section_btn">
                    Скачать расписание
                </div>
            </div>

            
                
            <div className="schedule_section__date-container">
                <div className="schedule_section_left_side_stars"></div>
                <p className="schedule_section__date" onClick={onTwentyFourCardClick}>26 ДЕКАБРЯ</p>
                <p className="schedule_section__date" onClick={onTwentyFiveClick}>27 ДЕКАБРЯ</p>
                <div className="schedule_section_right_side_stars"></div>
            </div>
                
            


        </section>
    )
}

export default ScheduleSection