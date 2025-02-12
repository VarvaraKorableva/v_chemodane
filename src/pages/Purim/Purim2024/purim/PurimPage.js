import NewAnnounce from '../../../../components/Purim/Purim2024/NewAnnounce/NewAnnounce'
import NewSchedule from '../../../../components/Purim/Purim2024/NewSchedule/NewSchedule'
import AboutFestival from '../../../../components/Purim/Purim2024/AboutFestival/AboutFestival'

function Purim2024({handleCardClick, addCard, limit}) {
    return (
        <>
        <NewAnnounce />
        <AboutFestival />
        <NewSchedule handleCardClick={handleCardClick}/>
        {/*<Participants addCard={addCard} limit={limit}/>*/}
        </>
    )
}

export default Purim2024