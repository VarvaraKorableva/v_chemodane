import ourPartnersData from '../../data/OurPartnersData'
import './OurPartners.css'
import {Link} from 'react-router-dom'

function OurPartners() {
    console.log(ourPartnersData)
    return (
        <section className="ourPartners__main-container">
            <h2 className="ourPartners__main-title">НАШИ ПАРТНЕРЫ</h2>
            <ul className="ourPartners__wrapper">
                {
                    ourPartnersData.map((item) => (
                        <li className="ourPartners__logo-container" key={item.id}>
                            <Link className="ourPartners__logo-container" target='_blank' to={item.link}>
                                <img src={item.logo} alt={item.alt} className="ourPartners__img"></img>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default OurPartners

/*

*/