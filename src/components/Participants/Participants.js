import participantsData from '../../data/participantsDataHaifa'
import hanukkahParticipantsData from '../../data/hanukkah/hanukkahParticipantsData'
import purim2025Data from '../../data/purim/purim2025marketparticipants.js'
import Participant from './Participant'
import './Participants.css'
import Heading from '../../UI-Kit/Heading/HeadingClean'
import { useLocation } from 'react-router-dom'

function Participants({addCard, limit}) {
  const location = useLocation()

  let data = participantsData;

  if (location.pathname.includes("/hanukkah_2024")) {
    data = hanukkahParticipantsData;
  } else if (location.pathname.includes("/purim_2025")) {
    data = purim2025Data;
  }

    return(
        <section className="participant-section" id='market'>
            <Heading>УЧАСТНИКИ МАРКЕТА</Heading>
                <ul className="participant-main-container">
                    {data.slice(0, limit).map((item) => (
                        <Participant key={item.id} item={item}></Participant>
                    ))}
                </ul>

                {data.length <= limit?
                    <button disabled={true} className="participant-btn-add_notactive">Вы видите всех участников</button>
                :
                    <button className="participant-btn-add" onClick={addCard}>Посмотреть еще</button>
                }
        </section>
    )
}

export default Participants;