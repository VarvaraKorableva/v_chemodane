import ourPartnersData from '../../data/OurPartnersData'
import './OurPartners.css'

import OnePartner from './OnePartner.js'

function OurPartners() {

    return (
        <section className="ourPartners__main-container">
            <h2 className="ourPartners__main-title">НАШИ ПАРТНЕРЫ</h2>
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
