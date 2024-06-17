import {Link} from 'react-router-dom'

function OnePerformance({item}) {
    //Date 2 июля
    return (
        <li className='onePerformance__container'>
            <p className='onePerformance__date'>{item.Date}</p>
            <Link to={item.AggregatorLink} className='onePerformance__link-btn'>Купить билет</Link>
            <div className='onePerformance__text-container'>
                <h2 className='onePerformance__title'>{item.CompanyName}</h2>
                <p className='onePerformance__description'>{item.Description}</p>
            </div>

        </li>
    )
}

export default OnePerformance