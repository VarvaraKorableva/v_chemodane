import './OurTeam.css'

function OneCard({person}) {
    return (
        <li className='ourTeam__container'>
            <img className='ourTeam__pic' src={person.img}></img>
            <p className='ourTeam__name'>{person.name}</p>
            <p className='ourTeam__info'>{person.info}</p>
        </li>
    )
}

export default OneCard;