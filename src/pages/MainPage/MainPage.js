//MainPage
import MainHeader from '../../components/Main/MainHeader/MainHeader'
import AboutFectivalMain from '../../components/Main/MainAbout/AboutFectivalMain/AboutFectivalMain'
import MainOurMission from '../../components/Main/MainOurMission/MainOurMission'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'
import Slider from '../../components/Main/Slider/Slider'
import OurTeam from '../../components/OurTeam/OurTeam'
import ReviewsSection from '../../components/Main/ReviewsSection/ReviewsSection'
import OurSponsorsSection from '../../components/Main/OurSponsorsSection/OurSponsorsSection'

function MainPage() {
    return(
        <>
            <Slider/>
            <AboutFectivalMain/>
            <SeparatorPage/>
            <OurTeam />
            <SeparatorPage/>
            <ReviewsSection/>
            <SeparatorPage/>
            <OurSponsorsSection/>
        </>
    )
} 

export default MainPage