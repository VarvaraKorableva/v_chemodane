import './HaifaNewAnnounce.css'
import { HashLink as Link } from 'react-router-hash-link'

function HaifaNewAnnounce() {
    return(
        <section className="hifa-announce__container">
            <div className="hifa__text-wrapper">
                <h1 className="hifa-announce__title"><span className="hifa-announce__title-date">1-2 июля</span><br/> фестиваль <span className="hifa-announce__title-nowrap">"В чемодане"</span><br/> возвращается <span className="hifa-announce__title-nowrap">в Хайфу!</span></h1>
                <div className="newAnnounce__btn-container">
                    
                    <Link className="newAnnounce__btn-link" to='/haifa-2024-schedule'>Расписание</Link>{/* */}
                    <Link className='newAnnounce__btn-link' to='#camp-haifa'>Кайтана</Link>
                    <Link className='newAnnounce__btn-link' to='#TheaterHaifa'>Спектакли</Link>
                    <Link className='newAnnounce__btn-link' to='#MasterClassHaifa'>Мастер-классы</Link>    
                    <Link className="newAnnounce__btn-link" to='#lectures'>Лекции и Презентации</Link>   
                    <Link className="newAnnounce__btn-link" to='#market'>Маркет</Link>

                </div> 
            </div>
        </section>
        
    )
}

export default HaifaNewAnnounce;
