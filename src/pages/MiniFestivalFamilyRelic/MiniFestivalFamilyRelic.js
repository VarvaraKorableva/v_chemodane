import MiniFestivalFamilyRelicBanner from '../../components/Festivals/MiniFestivalFamilyRelic/MiniFestivalFamilyRelicBanner/MiniFestivalFamilyRelicBanner'
import Info from '../../components/Festivals/MiniFestivalFamilyRelic/Info/Info'
import EventInfo from '../../components/Festivals/MiniFestivalFamilyRelic/EventInfo/EventInfo'
import Schedule from '../../components/Festivals/MiniFestivalFamilyRelic/Schedule/Schedule'
import HelpStickyButton from '../../components/TicketsStickyButton/HelpStickyButton'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'

import schedulePdf from '../../images/Scheduleminifestival.pdf'
import schedulePng from '../../images/minifestival.jpg'

function MiniFestivalFamilyRelic({handleCardClick}) {
    
    const colors = {
        pink: 'pink',
        purple: 'purple',
        yellow: 'yellow',
        blue: 'blue',
        another: 'another'
    }
    return (
        <>
            <MiniFestivalFamilyRelicBanner/>
            <EventInfo/>
            <SeparatorPage color={colors.pink}></SeparatorPage>
            <Info/>
            <SeparatorPage color={colors.yellow}></SeparatorPage>
            <Schedule schedulePdf={schedulePdf} schedulePng={schedulePng}/>
            <SeparatorPage color={colors.another}></SeparatorPage>
            <HelpStickyButton/>
        </>
    )
}

export default MiniFestivalFamilyRelic