import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { FaInstagram, FaTelegram, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa'
import participantsDataHaifa from '../../data/participantsDataHaifa'
//import participantsData from '../../data/hanukkah/hanukkahParticipantsData'
import './IndividualPageOfParticipants.css'

function IndividualPageOfParticipants() {

    let { slug } = useParams();

    const participant = participantsDataHaifa.find(f => f.slug == slug)

    console.log(participant)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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