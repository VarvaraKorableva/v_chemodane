import NewAnnounce from '../../components/CurrentAnnounce/HaifaNewAnnounce'
import HaifaSchedule from '../../components/HaifaSchedule/HaifaSchedule'
import EventAddress from '../../components/EventAddress/EventAddress'
import CampHaifa from '../../components/Camp/CampHaifa'
import TheaterHaifa from '../../components/Theater/TheaterHaifa'
import MasterClassHaifa from '../../components/MasterClass/MasterClassHaifa'
import LecturesAndPresentations from '../../components/LecturesAndPresentations/LecturesAndPresentations'
import OurPartners from '../../components/OurPartners/OurPartners'
import AboutFestival from '../../components/AboutFestival/AboutFestival'
import Participants from '../../components/Participants/Participants'
import OurTeam from '../../components/OurTeam/OurTeam'
import SeparatorPage from '../../components/SeparatorPage/SeparatorPage'

function Haifa({addCard, limit, handleCardClick}) {
    return(
    <>
        <NewAnnounce />
        <EventAddress />
        <AboutFestival />
        <HaifaSchedule handleCardClick={handleCardClick}/>
        <CampHaifa />
        <TheaterHaifa />
        <MasterClassHaifa />
        <LecturesAndPresentations />
        {/*<Participants addCard={addCard} limit={limit}/>*/}
        <OurPartners />
        <OurTeam />
        <SeparatorPage/>
    </>
    )
}

export default Haifa