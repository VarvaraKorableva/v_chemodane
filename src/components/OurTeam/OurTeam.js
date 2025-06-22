import './OurTeam.css'
import ourTeam from '../../data/ourTeam'
import OneCard from './OneCard'
import Heading from '../../UI-Kit/Heading/Heading'

function OurTeam() {
    return(
        <section className='ourTeam-section'>
            <Heading>НАША КОМАНДА</Heading>
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