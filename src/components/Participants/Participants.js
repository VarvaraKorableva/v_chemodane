import participantsData from '../../data/participantsData'
import Participant from './Participant'

function Participants({addMovies, limit}) {
    return(
        <section className="paticipant-section">
            <h2 className="paticipant-main-title">Участники фестиваля</h2>
            <ul className="paticipant-main-container">
            {participantsData.slice(0, limit).map((item) => (
                <Participant key={item.id} item={item}></Participant>
            ))}
            </ul>
            {participantsData.length <= limit? 
            <button disabled={true} className="paticipant-btn-add_notactive">Вы видите всех участников</button>
            :
            <button className="paticipant-btn-add" onClick={addMovies}>Посмотреть еще</button>
            }
            
        </section>
    )
}

export default Participants;