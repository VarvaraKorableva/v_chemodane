import participantsData from '../../data/participantsDataHaifa'
import Participant from './Participant'
import './Participants.css'
import Heading from '../../UI-Kit/Heading/Heading'
import { useLocation } from 'react-router-dom';

function Participants({addCard, limit}) {
  const location = useLocation()

  function getLanguage(str) {
    const firstThreeChars = str.slice(0, 3);
    return firstThreeChars.match(/[a-zA-Z]/) ? 'english' : 'russian';
  }

  const sortedData = participantsData.sort((a, b) => {
    const languageA = getLanguage(a.companyName);
    const languageB = getLanguage(b.companyName);

    // Сначала сортируем по английским названиям, затем по русским
    if (languageA === languageB) {
        return a.companyName.localeCompare(b.companyName);
    } else if (languageA === 'english') {
        return -1;
    } else {
        return 1;
    }
  });

    return(
        <section className={location.pathname.includes("/hanukkah_2024")? "participant-section participant-section_orange" : "participant-section"} id='market'>
            <Heading>УЧАСТНИКИ МАРКЕТА</Heading>
            <ul className="participant-main-container">
            {participantsData.slice(0, limit).map((item) => (
                <Participant key={item.id} item={item}></Participant>
            ))}
            </ul>
            {participantsData.length <= limit? 
            <button disabled={true} className="participant-btn-add_notactive">Вы видите всех участников</button>
            :
            <button className="participant-btn-add" onClick={addCard}>Посмотреть еще</button>
            }
            
        </section>
    )
}

export default Participants;