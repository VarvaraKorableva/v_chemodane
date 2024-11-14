//MainPage
import MainHeader from '../../components/Main/MainHeader/MainHeader'
import AboutFectivalMain from '../../components/Main/MainAbout/AboutFectivalMain/AboutFectivalMain'
import MainOurMission from '../../components/Main/MainOurMission/MainOurMission'
import Slider from '../../components/Main/Slider/Slider'
import OurTeam from '../../components/OurTeam/OurTeam'

function MainPage() {
    return(
        <>
            <Slider/>
            <AboutFectivalMain/>
            <OurTeam />
        </>
    )
} 

export default MainPage