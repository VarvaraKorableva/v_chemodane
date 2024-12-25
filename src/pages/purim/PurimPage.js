import NewAnnounce from '../../components/Purim/NewAnnounce/NewAnnounce'
import NewSchedule from '../../components/Purim/NewSchedule/NewSchedule'
import AboutFestival from '../../components/Purim/AboutFestival/AboutFestival'
import Participants from '../../components/Purim/Participants/Participants'



function Purim({handleCardClick, addCard, limit}) {
    return (
        <>
        <NewAnnounce />
        <AboutFestival />
        <NewSchedule handleCardClick={handleCardClick}/>
        {/*<Participants addCard={addCard} limit={limit}/>*/}
        </>
    )
}

export default Purim