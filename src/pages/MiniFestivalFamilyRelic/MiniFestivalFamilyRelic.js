import MiniFestivalFamilyRelicBanner from '../../components/Festivals/MiniFestivalFamilyRelic/MiniFestivalFamilyRelicBanner/MiniFestivalFamilyRelicBanner'
import Info from '../../components/Festivals/MiniFestivalFamilyRelic/Info/Info'
import EventInfo from '../../components/Festivals/MiniFestivalFamilyRelic/EventInfo/EventInfo'
import Schedule from '../../components/Festivals/MiniFestivalFamilyRelic/Schedule/Schedule'
import TicketsStickyButton from '../../components/TicketsStickyButton/TicketsStickyButton'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'

function MiniFestivalFamilyRelic({}) {
    const link = 'https://www.anumuseum.org.il/ru/events/the-suitcase/'
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
            <Schedule/>
            <SeparatorPage color={colors.another}></SeparatorPage>
            <TicketsStickyButton link={link}/>
        </>
    )
}

export default MiniFestivalFamilyRelic