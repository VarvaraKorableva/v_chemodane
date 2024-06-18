import {Link} from 'react-router-dom'
import './LecturesAndPresentations.css'

function OneLecturesAndPresentations({item}) {

    return (
        <Link className={item.CompanyName === "Рубен Давид Гонсаллес Гальего" ? 'masterClassHaifa__container_important' :'masterClassHaifa__container'} to={`/master-class-theater/${item.id}`}>
            <p className='masterClassHaifa__date'>{item.Date}</p>
            {item.AggregatorLink === ""
                ? 
                    <div className='masterClassHaifa__link-btn'>БЕСПЛАТНО</div>
                :
                    <Link to={item.AggregatorLink} className='masterClassHaifa__link-btn_important'>Купить билет</Link>
            }
            <div className='masterClassHaifa__age'>{item.Age}</div>
            <div className='masterClassHaifa__text-container'>
                <h2 className='masterClassHaifa__title'>{item.CompanyName}</h2>
                <p className='masterClassHaifa__description'>{item.Description}</p>
            </div>

        </Link>
    )
}

export default OneLecturesAndPresentations