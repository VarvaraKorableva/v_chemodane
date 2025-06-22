import NewAnnounce from '../../../../components/Purim/Purim2024/NewAnnounce/NewAnnounce'
import NewSchedule from '../../../../components/Purim/Purim2024/NewSchedule/NewSchedule'
import AboutFestival from '../../../../components/Purim/Purim2024/AboutFestival/AboutFestival'
import SeparatorPage from '../../../../components/SeparatorPage/SeparatorPage'

function Purim2024({handleCardClick, addCard, limit}) {
    return (
        <>
        <NewAnnounce />
        <AboutFestival />
        <NewSchedule handleCardClick={handleCardClick}/>
        <SeparatorPage />
        </>
    )
}

export default Purim2024