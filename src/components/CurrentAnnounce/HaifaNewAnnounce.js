//import mainPic from '../../images/mainPic.png'
import './HaifaNewAnnounce.css'
//import {Link} from 'react-router-dom' 
import { HashLink as Link } from 'react-router-hash-link'
//import schedule from '../../images/schedule.pdf'

function HaifaNewAnnounce() {
    return(
        <section className="hifa-announce__container">
            <div className="newAnnounce__text-wrapper">
                <h1 className="hifa-announce__title">1-2 июля <br/> фестиваль "В чемодане" <br/> возвращается в Хайфу!</h1>
                <div className="newAnnounce__btn-container">
                    <Link className="newAnnounce__btn-link" to='#festival'>О фестивале</Link>
                    <Link className="newAnnounce__btn-link" to='/haifa-2024-schedule'>Расписание</Link>{/* */}
                    <Link className='newAnnounce__btn-link'>Кайтана</Link>
                    <Link className='newAnnounce__btn-link'>Спектакли</Link>
                    <Link className='newAnnounce__btn-link'>Мастер-классы</Link>       
                    <Link className="newAnnounce__btn-link" to='#market'>Маркет</Link>
                </div> 
            </div>
        </section>
        
    )
}

export default HaifaNewAnnounce;
