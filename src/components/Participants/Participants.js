import participantsData from '../../data/participantsData'
import Participant from './Participant'

function Participants({addCard, limit}) {

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

  console.log(sortedData);

    return(
        <section className="paticipant-section">
            <h2 className="paticipant-main-title">Участники маркета</h2>
            <ul className="paticipant-main-container">
            {participantsData.slice(0, limit).map((item) => (
                <Participant key={item.id} item={item}></Participant>
            ))}
            </ul>
            {participantsData.length <= limit? 
            <button disabled={true} className="paticipant-btn-add_notactive">Вы видите всех участников</button>
            :
            <button className="paticipant-btn-add" onClick={addCard}>Посмотреть еще</button>
            }
            
        </section>
    )
}

export default Participants;