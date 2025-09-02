import EventIntroHeading from '../../../UI-Kit/Heading/EventIntroHeading'
import Container from '../../../UI-Kit/Container/Container'
import './EventIntro.css'

function EventIntro() {
    return(
        <Container as="section">
            <EventIntroHeading>Театральная лаборатория «Семейная реликвия» <span className="no-wrap">с Марфой Горвиц</span></EventIntroHeading>
            <p className='text text-center'>
                С 5 по 15 октября в АНУ - музее еврейского народа в Тель-Авиве пройдёт документальная театральная лаборатория «Семейная реликвия». Это особенный проект для родителей и детей (от 8 до 18 лет), который ведёт известный режиссёр <strong>Марфа Горвиц.</strong>
            </p>
        </Container>
    )
} 

export default EventIntro