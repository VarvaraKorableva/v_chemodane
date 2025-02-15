
import Hanukkah2024Banner from '../../components/Festivals/Hanukkah2024/Hanukkah2024Banner/Hanukkah2024Banner'
import Announcement from '../../components/Festivals/Hanukkah2024/Announcement/Announcement'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'
import ScheduleSection from '../../components/Festivals/Hanukkah2024/ScheduleSection/ScheduleSection'
import VisitingRules from '../../components/Festivals/Hanukkah2024/VisitingRules/VisitingRules'
import LotterySection from '../../components/Festivals/Hanukkah2024/LotterySection/LotterySection'

import Participants from '../../components/Participants/Participants'
import OurPartners from '../../components/OurPartners/OurPartners'
import LotterySlider from '../../components/Festivals/Hanukkah2024/LotterySection/LotterySlider/LotterySlider'

function Hanukkah2024Page({handleCardClick, addCard, limit, handleLotClick}) {

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
            <LotterySlider handleLotClick={handleLotClick}/>
            <SeparatorPage/>
            <Participants addCard={addCard} limit={limit}/>
            <SeparatorPage/>
            <OurPartners/>
           
        </>
    )
}

export default Hanukkah2024Page