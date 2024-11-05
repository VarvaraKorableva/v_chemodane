//MainPage
import MainHeader from '../../components/Main/MainHeader/MainHeader'
import MainAbout from '../../components/Main/MainAbout/MainAbout'
import MainOurMission from '../../components/Main/MainOurMission/MainOurMission'
import Slider from '../../components/Main/Slider/Slider'
import OurTeam from '../../components/OurTeam/OurTeam'

function MainPage() {
    return(
        <>
            <Slider/>
            <MainAbout/>
            <OurTeam />
        </>
    )
} 

export default MainPage