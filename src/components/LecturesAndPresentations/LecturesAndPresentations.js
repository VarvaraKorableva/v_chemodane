//MasterClass
import ParticipantsData  from '../../data/DataHaifa'
import OneLecturesAndPresentations from './OneLecturesAndPresentations'
import './LecturesAndPresentations.css'

function LecturesAndPresentations() {
    return(
        <section className="lecturesAndPresentations__main-container">
            <h2 className="masterClassHaifa__main-title">ЛЕКЦИИ И ПРЕЗЕНТАЦИИ</h2>

            <ul className="masterClassHaifa__wrapper">
                {ParticipantsData.map((item) => (
                    (item.Genre === "презентация" || item.Genre === "лекция") && item.Date !== "" ?
                        <OneLecturesAndPresentations 
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

export default LecturesAndPresentations