//MasterClass
import ParticipantsData  from '../../data/DataHaifa'
import OneMasterClassCardHaifa from './OneMasterClassCardHaifa'
import '../Theater/TheaterHaifa.css'

function MasterClassHaifa() {
    return(
        <section className="masterClassHaifa__main-container" id='MasterClassHaifa'>
            <h2 className="masterClassHaifa__main-title">МАСТЕР-КЛАССЫ</h2>

            <ul className="masterClassHaifa__wrapper">
                {ParticipantsData.map((i) => (
                    i.Genre === "мастер-класс" && i.Date !== "" ?
                        <OneMasterClassCardHaifa 
                            key={i.CompanyName}
                            item={i}
                        />
                    : 
                        <></>
                ))}
            </ul>

        </section>
    )
}

export default MasterClassHaifa