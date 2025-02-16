import { useLocation } from 'react-router-dom'
import ourPartnersData from '../../data/OurPartnersData'
import ourPartnersHanukkahData from '../../data/hanukkah/OurPartnersHanukkahData'
import purim2025participantsData from '../../data/purim/purim2025participants'
import './OurPartners.css'
//import Heading from '../../UI-Kit/Heading/Heading'
import Heading from '../../UI-Kit/Heading/HeadingClean'
import OnePartner from './OnePartner.js'

function OurPartners() {
    const location = useLocation()

    let data = ourPartnersData;

    if (location.pathname.includes("/hanukkah_2024")) {
      data = ourPartnersHanukkahData;
    } else if (location.pathname.includes("/purim_2025")) {
      data = purim2025participantsData;
    }

    return (
        <section className="ourPartners__main-container" id="partners">
          {location.pathname.includes("/purim_2025")? 
            <div className="ourPartners__triangles_up">
            </div>
          :
            <></>
          } 
        <Heading>НАШИ ПАРТНЕРЫ</Heading>
        <ul className="ourPartners__wrapper">
          {data.map((item) => (
            <OnePartner key={item.id} item={item} />
          ))}
        </ul>
        {location.pathname.includes("/purim_2025")? 
            <div className="ourPartners__triangles_down">
            </div>
          :
            <></>
          }
      </section>
    )
}

export default OurPartners
