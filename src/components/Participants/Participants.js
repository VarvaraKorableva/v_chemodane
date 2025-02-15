import participantsData from '../../data/participantsDataHaifa'
import hanukkahParticipantsData from '../../data/hanukkah/hanukkahParticipantsData.js'
import Participant from './Participant'
import './Participants.css'
//import Heading from '../../UI-Kit/Heading/Heading'
import Heading from '../../UI-Kit/Heading/HeadingClean'
import { useLocation } from 'react-router-dom'

function Participants({addCard, limit}) {
  const location = useLocation()

  function getLanguage(str) {
    const firstThreeChars = str.slice(0, 3);
    return firstThreeChars.match(/[a-zA-Z]/) ? 'english' : 'russian';
  }

  /*const sortedData = hanukkahParticipantsData.sort((a, b) => {
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
  }); */

    return(
        <section className="participant-section" id='market'>
            <Heading>УЧАСТНИКИ МАРКЕТА</Heading>
                <ul className="participant-main-container">
                    {hanukkahParticipantsData.slice(0, limit).map((item) => (
                        <Participant key={item.id} item={item}></Participant>
                    ))}
                </ul>

                {hanukkahParticipantsData.length <= limit?
                    <button disabled={true} className="participant-btn-add_notactive">Вы видите всех участников</button>
                :
                    <button className="participant-btn-add" onClick={addCard}>Посмотреть еще</button>
                }
        </section>
    )
}

export default Participants;