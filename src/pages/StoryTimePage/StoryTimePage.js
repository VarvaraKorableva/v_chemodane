import MainNewHeader from '../../components/Main/MainHeader/MainNewHeader/MainNewHeader'
import StoryTimeBannerSection from '../../components/StoryTime/StoryTimeBannerSection/StoryTimeBannerSection'
import CardsContainer from '../../components/StoryTime/Cards/CardsContainer'
import Presenters from '../../components/StoryTime/Presenters/Presenters'
import Partners from '../../components/StoryTime/Partners/Partners'
import Organizers from '../../components/StoryTime/Organizers/Organizers'
import MainFooter from '../../components/Main/MainFooter/MainFooter'

function StoryTimePage() {
    return (
        <>
        <MainNewHeader></MainNewHeader>
        <StoryTimeBannerSection></StoryTimeBannerSection>
        <CardsContainer></CardsContainer>
        <Presenters></Presenters>
        <Partners></Partners>
        <Organizers></Organizers>
        <MainFooter></MainFooter>
        </>
    )
} 

export default StoryTimePage