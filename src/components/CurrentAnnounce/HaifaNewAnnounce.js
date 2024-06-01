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
                    <Link className="newAnnounce__btn-link">Расписание</Link>{/*to='/schedule' */}
                    
                    <Link className="newAnnounce__btn-link" to='#market'>Маркет</Link>
                    <a className="newAnnounce__btn"  rel="noopener">Купить билеты</a>{/*href='https://tickets.anumuseum.org.il/ru/Фестиваль__В_чемодане._Пурим_в_музее_/?id=31117#choose_tickets' */}
                </div> 
            </div>
        </section>
        
    )
}

export default HaifaNewAnnounce;
