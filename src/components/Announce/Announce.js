import './Announce.css'
import {Link} from 'react-router-dom'
import announcementPic from '../../images/purim.png'
import schedule from '../../images/schedule.pdf'

function Announce() {
    return(
        
        <section className="header__container">
            <div className="header__text-wrapper">
                <h1 className="header__title">Пурим в музее 24-25 марта</h1>
                <div className="header__btn-container">
                    <Link className="header__btn-link" to='/schedule'>Посмотреть расписание →</Link>
                    <div className="announce__links-container">
                        <a className="header__btn" href='https://www.anumuseum.org.il/ru/events/purim-russian/' target="_blank">
                            Купить билеты
                        </a>
                        <a href={schedule} download="WebDeveloper_KorablevaVarvara.pdf" className="header__btn">
                            Скачать расписание
                        </a>
                    </div>

                </div> 


            </div>

            <img class="header__announcement-pic" src={announcementPic}></img>
        </section>
        
    )
}

export default Announce;


/*

                <div class="header__square-pic rotation"></div>
                <div class="kaufman__triangle rotation"></div>

                <div class="triangle rotation"></div>
                <div class="square-pic rotation"></div>
 */