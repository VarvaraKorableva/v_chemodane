import {Link} from 'react-router-dom'

function OnePartner ({item}) {
    return (
        <li className="partners__logo-wrapper" key={item.id}>
            <Link className="partners__logo-container" target='_blank' to={item.link}>
                <img src={item.logo} alt={item.alt} className="partners__img"></img>
            </Link>
        </li>
    )
}

export default OnePartner