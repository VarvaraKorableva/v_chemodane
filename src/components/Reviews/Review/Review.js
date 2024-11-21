import './Review.css'

function Review ({item}) {
    return(
        <li className="review__container">
            <div className="review__imgContainer">
                <img src={item.img} alt={item.name} className="review__img"/>
            </div>

            <div className="review__textContainer">
                <p className="review__name">{item.name}</p>
                <p className="review__job">{item.job}</p>
                <p className="review__text">{item.text}</p>
            </div>
        </li>
    )
}
export default Review