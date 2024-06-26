import ParticipantsData  from '../../data/DataHaifa'
import OneMasterClassCardHaifa from './OneMasterClassCardHaifa'
import '../Theater/TheaterHaifa.css'

function MasterClassHaifa() {
    
    return(
        <section className="masterClassHaifa__main-container" id='MasterClassHaifa'>
            <h2 className="masterClassHaifa__main-title">МАСТЕР-КЛАССЫ</h2>

            <ul className="masterClassHaifa__wrapper">
                {ParticipantsData.map((item) => (
                    item.Genre === "мастер-класс" && item.Date !== "" ?
                        <OneMasterClassCardHaifa 
                            key={item.id}
                            item={item}
                        />
                    : 
                        <></>
                ))}
            </ul>

        </section>
    )
}

export default MasterClassHaifa