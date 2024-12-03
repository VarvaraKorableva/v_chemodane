import SponsorsData from '../../../data/SponsorsData'
import './OurSponsorsSection.css'
import OneSponsor from './OneSponsor/OneSponsor.js'
import Heading from '../../../UI-Kit/Heading/Heading'

function OurSponsorsSection() {

    return (
        <section className="our-sponsors-section-container">
            <div className="our-sponsors-section-book-page"></div>
            <Heading>НАШИ СПОНСОРЫ</Heading>
            <ul className="ourPartners__wrapper">
                {
                    SponsorsData.map((item) => (
                        <OneSponsor key={item.id} item={item}></OneSponsor>
                    ))
                }
            </ul>
        </section>
    )
}

export default OurSponsorsSection
