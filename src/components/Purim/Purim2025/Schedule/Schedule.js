import Heading from '../../../../UI-Kit/Heading/HeadingClean'
import './Schedule.css'

function Schedule() {
    return(
        <section className='schedule__section' id='schedule_purim_2025'>
            <Heading>Расписание</Heading>

            <div className='schedule__container'>
                <p className='schedule__date'>16 марта</p>
                <div className='schedule__triangle schedule__triangle_1'></div>
                <div className='schedule__triangle schedule__triangle_2'></div>
                <div className='schedule__triangle schedule__triangle_3'></div>
                <div className='schedule__triangle schedule__triangle_4'></div>
                <div className='schedule__triangle schedule__triangle_5'></div>
                <div className='schedule__triangle schedule__triangle_6'></div>
            </div>

        </section>
    )
}

export default Schedule