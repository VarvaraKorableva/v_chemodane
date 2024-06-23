import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaInstagram, FaTelegram, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa'
import DataHaifa from '../../data/DataHaifa'
import './IndividualPage.css'
import {Link} from 'react-router-dom'

function IndividualPage() {
    let { id } = useParams()
    const [participant, setParticipant] = useState(DataHaifa.find(f => f.id == id))

    useEffect(() => {
        window.scrollTo(0, 0);
        setParticipant(DataHaifa.find(f => f.id == id))
      }, []);

    return(
        <section className='individualPage-section'>
            <h2 className='individualPage-title'>{participant.CompanyName} представляет {participant.Genre} <br/>{participant.Name}</h2>
                <div className='individualPage-text-container'>
                    <p 
                        className='individualPage-discription'>
                            {participant.Description}
                    </p>
                    {participant.AggregatorLink === ''?
                    <div className='individualPage-link-ticket'>БЕСПЛАТНО</div>
                    :
                    participant.Name === 'Рыцарские бои на мечах'?
                    <div className='individualPage-link-ticket'>Билеты на месте</div>
                    :
                    <Link className='individualPage-link-ticket' to={participant.AggregatorLink} target="_blank">Купить билет</Link>
                    }
                    <p className='individualPage-age'>{participant.Age}</p>
                    <p>{participant.Date}</p>

                    <div className='individualPageOfParticipants-links-container'>
                        {participant.SocialNetwork.Instagram !== "" ? <a className='individualPageOfParticipants-link' target='_blank' href={participant.SocialNetwork.Instagram}><FaInstagram /></a> : <></>}
                        {participant.SocialNetwork.Facebook !== "" ? <a className='individualPageOfParticipants-link' target='_blank' href={participant.SocialNetwork.Facebook}><FaFacebook /></a> : <></>}
                        
                    </div>

                </div>
        </section>
    )
}

export default IndividualPage