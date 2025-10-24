import { useLocation } from 'react-router-dom'
import './OurPartners.css'
import Heading from '../../UI-Kit/Heading/HeadingClean'
import OnePartner from './OnePartner.js'

function OurPartners({dataArr}) {
    const location = useLocation()

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
          {dataArr.map((item) => (
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
