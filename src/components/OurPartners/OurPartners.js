import ourPartnersData from '../../data/OurPartnersData'
import './OurPartners.css'
import Heading from '../../UI-Kit/Heading/Heading'

import OnePartner from './OnePartner.js'

function OurPartners() {

    return (
        <section className="ourPartners__main-container">
            <Heading>НАШИ ПАРТНЕРЫ</Heading>
            <ul className="ourPartners__wrapper">
                {
                    ourPartnersData.map((item) => (
                        <OnePartner key={item.id} item={item}></OnePartner>
                    ))
                }
            </ul>
        </section>
    )
}

export default OurPartners
