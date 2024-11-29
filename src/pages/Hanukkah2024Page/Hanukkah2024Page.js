import Hanukkah2024Banner from '../../components/Festivals/Hanukkah2024/Hanukkah2024Banner/Hanukkah2024Banner'
import Announcement from '../../components/Festivals/Hanukkah2024/Announcement/Announcement'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'
import ScheduleSection from '../../components/Festivals/Hanukkah2024/ScheduleSection/ScheduleSection'
import VisitingRules from '../../components/Festivals/Hanukkah2024/VisitingRules/VisitingRules'
import LotterySection from '../../components/Festivals/Hanukkah2024/LotterySection/LotterySection'
import TicketsStickyButton from '../../components/TicketsStickyButton/TicketsStickyButton'

function Hanukkah2024Page({handleCardClick}) {
    return (
        <>
            <Hanukkah2024Banner/>
            <Announcement/>
            <SeparatorPage/>
            <ScheduleSection handleCardClick={handleCardClick}/>
            <SeparatorPage/>
            <VisitingRules/>
            <SeparatorPage/>
            <LotterySection/>
            <TicketsStickyButton/>
        </>
    )
}

export default Hanukkah2024Page