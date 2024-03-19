//import mainPic from '../../images/mainPic.png'
import './NewAnnounce.css'
//import {Link} from 'react-router-dom' 
import { HashLink as Link } from 'react-router-hash-link'
//import schedule from '../../images/schedule.pdf'

function NewAnnounce() {
    return(
        <section className="newAnnounce__container">
            <div className="newAnnounce__text-wrapper">
                <h1 className="newAnnounce__title">ПУРИМ В МУЗЕЕ 24-25 МАРТА</h1>
                <div className="newAnnounce__btn-container">
                    <Link className="newAnnounce__btn-link" to='#festival'>О фестивале</Link>
                    <Link className="newAnnounce__btn-link" to='/schedule'>Расписание</Link>
                    <Link className="newAnnounce__btn-link" to=''>Участники</Link>
                    <Link className="newAnnounce__btn-link" to='#market'>Маркет</Link>
                    <a className="newAnnounce__btn" href='https://tickets.anumuseum.org.il/ru/Фестиваль__В_чемодане._Пурим_в_музее_/?id=31117#choose_tickets' target="_blank">Купить билеты</a>
                </div> 
            </div>
        </section>
        
    )
}

export default NewAnnounce;

/*
<a href={schedule} download="schedule.pdf" className="newAnnounce__btn-link">Скачать расписание</a>
*/