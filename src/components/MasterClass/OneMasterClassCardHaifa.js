import {Link} from 'react-router-dom'
import './MasterClass.css'

function OneMasterClassCardHaifa({item}) {

    return (
        <li className='masterClassHaifa__container'>
            <p className='masterClassHaifa__date'>{item.Date}</p>
            <Link to={item.AggregatorLink} className='masterClassHaifa__link-btn'>Купить билет</Link>
            <div className='masterClassHaifa__text-container'>
                <h2 className='masterClassHaifa__title'>{item.CompanyName}</h2>
                <p className='masterClassHaifa__description'>{item.Description}</p>
            </div>

        </li>
    )
}

export default OneMasterClassCardHaifa