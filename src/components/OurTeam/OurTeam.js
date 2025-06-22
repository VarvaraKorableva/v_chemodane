import './OurTeam.css'
import ourTeam from '../../data/ourTeam'
import OneCard from './OneCard'
import Heading from '../../UI-Kit/Heading/Heading'
import Container from '../../UI-Kit/Container/Container'

function OurTeam() {
    return(
        <Container as="section">
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
        </Container>
    )
}

export default OurTeam;