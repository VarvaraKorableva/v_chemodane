import Purim2025Banner from '../../../components/Purim/Purim2025/Purim2025Banner/Purim2025Banner'
import Presentation from '../../../components/Purim/Purim2025/Presentation/Presentation'
import Schedule from '../../../components/Purim/Purim2025/Schedule/Schedule'
import ImportantNotes from "../../../components/Purim/Purim2025/ImportantNotes/ImportantNotes"
import Participants from '../../../components/Participants/Participants'
import OurPartners from '../../../components/OurPartners/OurPartners'
import purim2025participantsData from '../../../data/purim/purim2025participants'

import SeparatorPage from '../../../components/SeparatorPage/SeparatorPage'

function Purim2025({handleCardClick, addCard, limit}) {
    const colors = {
        pink: 'pink',
        purple: 'purple',
        yellow: 'yellow',
        blue: 'blue',
        another: 'another'
    }
    return (
        <>
            <Purim2025Banner></Purim2025Banner>
            <Presentation></Presentation>
            <SeparatorPage color={colors.pink}></SeparatorPage>
            <Schedule handleCardClick={handleCardClick}></Schedule>
            <SeparatorPage color={colors.purple}></SeparatorPage>
            <ImportantNotes></ImportantNotes>
            <SeparatorPage color={colors.yellow}></SeparatorPage>
            <Participants addCard={addCard} limit={limit}/>
            <SeparatorPage color={colors.blue}></SeparatorPage>
            <OurPartners dataArr={purim2025participantsData}/>
            <SeparatorPage color={colors.another}></SeparatorPage>
        </>
    )
}

export default Purim2025