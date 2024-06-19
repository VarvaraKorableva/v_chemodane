import {Link} from 'react-router-dom'

function OnePerformance({item}) {

    return (
        <Link className={item.CompanyName === "Cпектакль Анатолия Белого и Татьяны Марек"? 'onePerformance__container_important': 'onePerformance__container'} to={`/master-class-theater/${item.id}`}>
            <p className={item.CompanyName === "Cпектакль Анатолия Белого и Татьяны Марек"? 'onePerformance__date_important' : 'onePerformance__date'}>{item.Date}</p>
            {item.AggregatorLink === ""?
                <div className='masterClassHaifa__link-btn'>БЕСПЛАТНО</div>
            :
                <Link to={item.AggregatorLink} className={item.CompanyName === "Cпектакль Анатолия Белого и Татьяны Марек"? 'onePerformance__link-btn_important': 'onePerformance__link-btn'}>Купить билет</Link>
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