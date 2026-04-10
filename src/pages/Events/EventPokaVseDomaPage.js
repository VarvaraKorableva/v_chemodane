import EventPokaVseDomaBanner from '../../components/Events/EventPokaVseDoma/EventPokaVseDomaBanner/EventPokaVseDomaBanner'
import EventPokaVseDomaScedule from '../../components/Events/EventPokaVseDoma/EventPokaVseDomaScedule/EventPokaVseDomaScedule'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'
import FestivalLecture from '../../components/Events/EventPokaVseDoma/FestivalLecture/FestivalLecture'
import StickyButton from '../../components/TicketsStickyButton/LotteryStickyButton'

function EventPokaVseDomaPage({}) {

    const colors = {
        another: 'another'
    }

    const link = 'https://eventbuzz.co.il/kolmanovskyilya'
    const text = "Билеты"
    const className= 'lottery-sticky-button'

    return (
        <>
            <EventPokaVseDomaBanner/>
            <FestivalLecture></FestivalLecture>
            <SeparatorPage color={colors.another}></SeparatorPage>
            <EventPokaVseDomaScedule/>
            <SeparatorPage color={colors.another}></SeparatorPage>
            <StickyButton  link={link} text={text} className={className}></StickyButton>
        </>
    )
}

export default EventPokaVseDomaPage