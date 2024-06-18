import {Link} from 'react-router-dom'

function OnePerformance({item}) {

    return (
        <Link className='onePerformance__container' to={`/master-class-theater/${item.id}`}>
            <p className='onePerformance__date'>{item.Date}</p>
            {item.AggregatorLink === ""?
                <div className='masterClassHaifa__link-btn'>БЕСПЛАТНО</div>
            :
                <Link to={item.AggregatorLink} className='onePerformance__link-btn'>Купить билет</Link>
            }
            <div className='onePerformance__age'>{item.Age}</div>
            <div className='onePerformance__text-container'>
                <h2 className='onePerformance__title'>{item.Name}</h2>
                <p className='onePerformance__description'>{item.Description}</p>
            </div>

        </Link>
    )
}

export default OnePerformance