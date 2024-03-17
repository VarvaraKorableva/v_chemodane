import { useParams } from 'react-router-dom'
import { FaInstagram, FaTelegram, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa'
import participantsData from '../../data/participantsData'
import './IndividualPageOfParticipants.css'

function IndividualPageOfParticipants() {

    let { id } = useParams();

    const participant = participantsData.find(f => f.id == id)

    return(
        <section className='individualPageOfParticipants-section'>
            <h2 className='individualPageOfParticipants-title'>{participant.companyName}</h2>
            <div className='individualPageOfParticipants-container'>
                <img 
                    className='individualPageOfParticipants-pic' 
                    src={participant.imgLink} 
                    alt={`Логотип компании ${participant.companyName}`}>
                </img>
                <div className='individualPageOfParticipants-text-container'>
                    <p 
                        className='individualPageOfParticipants-discription'>
                            {participant.description}
                    </p>

                    <div className='individualPageOfParticipants-links-container'>
                        {participant.socialNetwork.instagram.length? <a className='individualPageOfParticipants-link' target='_blank' href={participant.socialNetwork.instagram}><FaInstagram /></a> : <></>}
                        {participant.socialNetwork.facebook.length? <a className='individualPageOfParticipants-link' target='_blank' href={participant.socialNetwork.facebook}><FaFacebook /></a> : <></>}
                        {participant.socialNetwork.personalSite.length? <a className='individualPageOfParticipants-link' target='_blank' href={participant.socialNetwork.personalSite}><FaExternalLinkAlt /></a>: <></>}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default IndividualPageOfParticipants;

/*
                    <div className='individualPageOfParticipants-links-container'>
                        {participant.socialNetwork.instagram.length? <a className='individualPageOfParticipants-link' target='_blank' href={participant.socialNetwork.instagram}><FaInstagram /></a> : <></>}
                        {participant.socialNetwork.facebook.length? <a className='individualPageOfParticipants-link' target='_blank' href={participant.socialNetwork.facebook}><FaFacebook /></a> : <></>}
                        {participant.socialNetwork.personalSite.length? <></> : <a className='individualPageOfParticipants-link' target='_blank' href={participant.socialNetwork.personalSite}><FaExternalLinkAlt /></a>}
                    </div>
*/