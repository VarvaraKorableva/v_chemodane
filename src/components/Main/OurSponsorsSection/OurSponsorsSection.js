import SponsorsData from '../../../data/SponsorsData'
import './OurSponsorsSection.css'
import OneSponsor from './OneSponsor/OneSponsor.js'

function OurSponsorsSection() {

    return (
        <section className="our-sponsors-section-container">
            <div className="our-sponsors-section-book-page"></div>
            <h2 className="our-sponsors-section-title">НАШИ СПОНСОРЫ</h2>
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
