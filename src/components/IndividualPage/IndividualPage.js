import { useParams } from 'react-router-dom'
import { FaInstagram, FaTelegram, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa'
import DataHaifa from '../../data/DataHaifa'
import './IndividualPage.css'
import {Link} from 'react-router-dom'

function IndividualPage() {
    let { id } = useParams()
    const participant = DataHaifa.find(f => f.id == id)

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

//{participant.SocialNetwork.PersonalSite !== ""? <a className='individualPageOfParticipants-link' target='_blank' href={participant.SocialNetwork.PersonalSite}><FaExternalLinkAlt /></a>: <></>}