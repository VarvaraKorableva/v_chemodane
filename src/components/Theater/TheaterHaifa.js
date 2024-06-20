import  ParticipantsData  from '../../data/DataHaifa'
import OnePerformance from './OnePerformance'
import './TheaterHaifa.css'

function TheaterHaifa() {
    return(
        <section className="theaterHaifa__main-container" id='TheaterHaifa'>
            <h2 className="theaterHaifa__main-title">СПЕКТАКЛИ</h2>

            <ul className="theaterHaifa__wrapper">
                {ParticipantsData.map((i) => (
                    i.Genre === "спектакль" && i.Date !== "" ?
                        <OnePerformance 
                            key={i.id}
                            item={i}
                        />
                    : 
                        <></>
                ))}
            </ul>

        </section>
    )
}

export default TheaterHaifa