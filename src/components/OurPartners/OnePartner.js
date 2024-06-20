import {Link} from 'react-router-dom'

function OnePartner ({item}) {
    return (
        <li className="ourPartners__logo-wrapper" key={item.id}>
            <Link className="ourPartners__logo-container" target='_blank' to={item.link}>
                <img src={item.logo} alt={item.alt} className="ourPartners__img"></img>
            </Link>
        </li>
    )
}

export default OnePartner