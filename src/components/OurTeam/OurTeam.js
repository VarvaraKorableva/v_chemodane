import './OurTeam.css'
import ourTeam from '../../data/ourTeam'
import OneCard from './OneCard'

function OurTeam() {
    return(
        <section className='ourTeam-section'>
            <h2 className='ourTeam-main-title'>Наша команда</h2>
            <ul className='ourTeam__main-container'>
                {ourTeam.map((person) => (
                    <OneCard
                        person={person}
                        key={person.id}
                    />
                    ))
                }
            </ul>
        </section>
    )
}

export default OurTeam;