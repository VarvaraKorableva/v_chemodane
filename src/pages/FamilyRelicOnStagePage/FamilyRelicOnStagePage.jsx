import FamilyRelicOnStageBanner from '../../components/FamilyRelicOnStage/FamilyRelicOnStageBanner/FamilyRelicOnStageBanner'
import WhatWillHappen from '../../components/FamilyRelicOnStage/WhatWillHappen/WhatWillHappen'
import PurposeAndAudience from '../../components/FamilyRelicOnStage/PurposeAndAudience/PurposeAndAudience'
import EventTime from '../../components/FamilyRelicOnStage/EventTime/EventTime'
import PriceInfo from '../../components/FamilyRelicOnStage/PriceInfo/PriceInfo'
import Benefits from '../../components/FamilyRelicOnStage/Benefits/Benefits'
import EventIntro from '../../components/FamilyRelicOnStage/EventIntro/EventIntro'
import Schedule from '../../components/Purim/Purim2025/Schedule/Schedule'
import ImportantNotes from "../../components/Purim/Purim2025/ImportantNotes/ImportantNotes"
import TicketsStickyButton from '../../components/TicketsStickyButton/TicketsStickyButton'
import Participants from '../../components/Participants/Participants'
import OurPartners from '../../components/OurPartners/OurPartners'

import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'

function FamilyRelicOnStagePage({}) {
    const colors = {
        pink: 'pink',
        purple: 'purple',
        yellow: 'yellow',
        blue: 'blue',
        another: 'another'
    }
    return (
        <>
            <FamilyRelicOnStageBanner/>
            <EventIntro/>
            <SeparatorPage color={colors.blue}></SeparatorPage>
            <WhatWillHappen/>
            <SeparatorPage color={colors.pink}></SeparatorPage>
            <PurposeAndAudience/>
            <SeparatorPage color={colors.purple}></SeparatorPage>
            <EventTime/>
            <SeparatorPage color={colors.yellow}></SeparatorPage>
            <PriceInfo/>
            <SeparatorPage color={colors.blue}></SeparatorPage>
            <Benefits/>
            
            <SeparatorPage color={colors.another}></SeparatorPage>
            
        </>
    )
}

export default FamilyRelicOnStagePage