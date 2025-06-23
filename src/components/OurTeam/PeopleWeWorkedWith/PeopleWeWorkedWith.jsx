//PeopleWeWorkedWith
import '../OurTeam.css'
import peopleWeWorkedWith from '../../../data/people-we-worked-with'
import OneCard from '../OneCard'
import Heading from '../../../UI-Kit/Heading/Heading'
import Container from '../../../UI-Kit/Container/Container'

function PeopleWeWorkedWith() {
    return(
        <Container as="section">
            <Heading>С нами работали</Heading>
            <ul className='ourTeam__main-container'>
                {peopleWeWorkedWith.map((person) => (
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

export default PeopleWeWorkedWith;