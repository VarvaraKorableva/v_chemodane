import {Link} from 'react-router-dom'
import './MasterClass.css'

function OneMasterClassCardHaifa({item}) {
    
    return (
        <Link className='onePerformance__container' to={`/master-class-theater/${item.id}`}>
            <p className='masterClassHaifa__date'>{item.Date}</p>
            
            {item.AggregatorLink === ""
                ? 
                    <div className='masterClassHaifa__link-btn'>БЕСПЛАТНО</div>    
                :
                item.Name === 'Рыцарские бои на мечах'?
                <div className='masterClassHaifa__link-btn'>Билеты на месте</div>
                :
                <div to={item.AggregatorLink} className='masterClassHaifa__link-btn' target="_blank">Купить билет</div>
            }
            <div className='masterClassHaifa__age'>{item.Age}</div>
            <div className='masterClassHaifa__text-container'>
                
                <h2 className='masterClassHaifa__title'>{item.Name}</h2>
                <p className='masterClassHaifa__description'>{item.Description}</p>
            </div>

        </Link>
    )
}

export default OneMasterClassCardHaifa