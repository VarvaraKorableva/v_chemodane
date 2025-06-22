import SponsorsData from '../../../data/SponsorsData'
import './OurSponsorsSection.css'
import OneSponsor from './OneSponsor/OneSponsor.js'
import Heading from '../../../UI-Kit/Heading/Heading'
import Container from '../../../UI-Kit/Container/Container'

function OurSponsorsSection() {

    return (
        <Container as="section" className='ourTeam-section'>
            {/*<div className="our-sponsors-section-book-page"></div>*/}
            <Heading>НАШИ СПОНСОРЫ</Heading>
            <ul className="ourPartners__wrapper">
                {
                    SponsorsData.map((item) => (
                        <OneSponsor key={item.id} item={item}></OneSponsor>
                    ))
                }
            </ul>
        </Container>
    )
}

export default OurSponsorsSection
