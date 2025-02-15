import Purim2025Banner from '../../../components/Purim/Purim2025/Purim2025Banner/Purim2025Banner'
import Presentation from '../../../components/Purim/Purim2025/Presentation/Presentation'
import Schedule from '../../../components/Purim/Purim2025/Schedule/Schedule'
import ImportantNotes from "../../../components/Purim/Purim2025/ImportantNotes/ImportantNotes"
import TicketsStickyButton from '../../../components/TicketsStickyButton/TicketsStickyButton'
import Participants from '../../../components/Participants/Participants'
import OurPartners from '../../../components/OurPartners/OurPartners'

function Purim2025({handleCardClick, addCard, limit}) {
    return (
        <>
            <Purim2025Banner></Purim2025Banner>
            <Presentation></Presentation>
            <Schedule></Schedule>
            <ImportantNotes></ImportantNotes>
            <Participants addCard={addCard} limit={limit}/>
            <OurPartners/>
            <TicketsStickyButton/>
        </>
    )
}

export default Purim2025