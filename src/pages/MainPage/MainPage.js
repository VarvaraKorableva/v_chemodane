//MainPage
import MainHeader from '../../components/Main/MainHeader/MainHeader'
import AboutFectivalMain from '../../components/Main/MainAbout/AboutFectivalMain/AboutFectivalMain'
import MainOurMission from '../../components/Main/MainOurMission/MainOurMission'
import Slider from '../../components/Main/Slider/Slider'
import OurTeam from '../../components/OurTeam/OurTeam'
import ReviewsSection from '../../components/Main/ReviewsSection/ReviewsSection'
import OurSponsorsSection from '../../components/Main/OurSponsorsSection/OurSponsorsSection'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'

function MainPage() {
    return(
        <>
            <Slider/>
            <AboutFectivalMain/>
            <SeparatorPage/>
            <OurTeam />
            <ReviewsSection/>
            <OurSponsorsSection/>
        </>
    )
} 

export default MainPage