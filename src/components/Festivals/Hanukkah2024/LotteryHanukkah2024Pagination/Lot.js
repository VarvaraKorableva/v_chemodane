import './LotteryHanukkah2024Pagination.css'
import { Link } from 'react-router-dom'

function Lot ({item}) {
    return(
        <li className="lots__container">
            <div className="lots__imgContainer">
                <img src={item.img} alt={item.name} className="lots__img"/>
            </div>

            <div className="lots__textContainer">
                <p className="lots__name">{item.name}</p>
                <p className="lots__title">Лот от:</p>
                <p className="lots__name">{item.whoIsPlaying}</p>
            </div>
        </li>
    )
}
export default Lot