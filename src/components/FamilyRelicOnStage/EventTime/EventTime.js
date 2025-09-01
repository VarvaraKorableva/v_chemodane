import Heading from '../../../UI-Kit/Heading/Heading'
import Container from '../../../UI-Kit/Container/Container'

function EventTime() {
    return (
        <Container Container as="section" id="schedule_FamilyRelicOnStage">
            <Heading>Когда?</Heading>   
            <ul className='list'>
                <li>Первая встреча — 5 октября</li>
                <li>Занятия проходят 6 дней по 4–5 часов</li>
                <li>Финальный показ — 15 октября</li>
            </ul>
        </Container>
    )
}

export default EventTime