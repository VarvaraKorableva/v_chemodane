import { useLocation } from 'react-router-dom'
import ourPartnersData from '../../data/OurPartnersData'
import ourPartnersHanukkahData from '../../data/hanukkah/OurPartnersHanukkahData'
import './OurPartners.css'
import Heading from '../../UI-Kit/Heading/Heading'
import OnePartner from './OnePartner.js'

function OurPartners() {
    const location = useLocation()
    return (
        <section className="ourPartners__main-container">
            <Heading>НАШИ ПАРТНЕРЫ</Heading>
            <ul className="ourPartners__wrapper">

                {location.pathname.includes("/hanukkah_2024")?
                    ourPartnersHanukkahData.map((item) => (
                        <OnePartner key={item.id} item={item}></OnePartner>
                    ))
                
                    :
                 
                    ourPartnersData.map((item) => (
                        <OnePartner key={item.id} item={item}></OnePartner>
                    ))
                }    
                 
            </ul>
        </section>
    )
}

export default OurPartners
