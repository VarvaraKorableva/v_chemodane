//MasterClass
import ParticipantsData  from '../../data/DataHaifa'
import OneLecturesAndPresentations from './OneLecturesAndPresentations'
import './LecturesAndPresentations.css'

function LecturesAndPresentations() {
    return(
        <section className="lecturesAndPresentations__main-container">
            <h2 className="masterClassHaifa__main-title">ЛЕКЦИИ И ПРЕЗЕНТАЦИИ</h2>

            <ul className="masterClassHaifa__wrapper">
                {ParticipantsData.map((i) => (
                    (i.Genre === "презентация" || i.Genre === "лекция") && i.Date !== "" ?
                        <OneLecturesAndPresentations 
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

export default LecturesAndPresentations