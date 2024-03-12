import participantsData from '../../data/participantsData'
import Participant from './Participant'

function Participants() {
    return(
        <section className="paticipant-section">
            <h2 className="paticipant-main-title">Участники фестиваля</h2>
            <ul className="paticipant-main-container">
            {participantsData.map((item, index) => (
                <Participant key={index} item={item}></Participant>
            ))}
            </ul>
        </section>
    )
}

export default Participants;