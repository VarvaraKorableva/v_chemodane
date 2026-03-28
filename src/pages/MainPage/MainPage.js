import AboutFectivalMain from '../../components/Main/MainAbout/AboutFectivalMain/AboutFectivalMain'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'
import Slider from '../../components/Main/Slider/Slider'
import OurTeam from '../../components/OurTeam/OurTeam'
import ReviewsSection from '../../components/Main/ReviewsSection/ReviewsSection'
import OurSponsorsSection from '../../components/Main/OurSponsorsSection/OurSponsorsSection'
import StickyButton from '../../components/TicketsStickyButton/LotteryStickyButton'

function MainPage() {
    const linkOne = 'https://forms.gle/USjZPq4y9WSDvLBy6'
    const textOne = 'ПОДАТЬ ЗАЯВКУ НА МАРКЕТ'
    const classNameOne= 'lottery-sticky-button-One'

    const linkTwo = 'https://forms.gle/N4mSMeM2ZK5Fdw7f9'
    const textTwo = 'ПРЕДЛОЖИТЬ СВОЙ МК ИЛИ СПЕКТАКЛЬ'
    const className= 'lottery-sticky-button'

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
            <SeparatorPage/>
            <StickyButton  link={linkOne} text={textOne} className={classNameOne}></StickyButton>
            <StickyButton  link={linkTwo} text={textTwo} className={className}></StickyButton>
        </>
    )
} 

export default MainPage