import './MiniFestivalFamilyRelicBanner.css'
//import banner from '../../../../images/banners/purim2025/background.png'
//import banner from '../../../../images/slider/Relic.jpeg'
import NavContainer from '../NavContainer/NavContainer'

function MiniFestivalFamilyRelicBanner() {
    return (
        <section className="MiniFestivalFamilyRelicBanner__section">
            <div className="MiniFestivalFamilyRelicBanner__pic-container">
                <div className="MiniFestivalFamilyRelicBanner__pic-circls"></div>
                <div className="MiniFestivalFamilyRelicBanner__pic-houses"></div>
                <div className="MiniFestivalFamilyRelicBanner__pic-peopleandlabel"></div>
                <div className='MiniFestivalFamilyRelicBanner__textContainer'>
                    <p className='MiniFestivalFamilyRelicBanner__text MiniFestivalFamilyRelicBanner__date'>15 октября</p>

                    <p className='MiniFestivalFamilyRelicBanner__text'>открытие дверей: 17:00</p>
                    <p className='MiniFestivalFamilyRelicBanner__text'>начало спектакля: 19:00</p>

                    <h1 className='MiniFestivalFamilyRelicBanner__title'>Мини-фестиваль</h1>

                    <p className='MiniFestivalFamilyRelicBanner__text MiniFestivalFamilyRelicBanner__note'>Семейная реликвия</p>
                    <p className='MiniFestivalFamilyRelicBanner__text'>документальный спектакль</p>
                    <p className='MiniFestivalFamilyRelicBanner__text'>режиссера <span className='MiniFestivalFamilyRelicBanner__note'>марфы горвиц</span></p>
{/*
                    <ul className='MiniFestivalFamilyRelicBanner__textProgramsContainer'>а также в программе:
                        <li className=''>экскурсии</li>
                        <li className=''>джас</li>
                        <li className=''>дегустация вина</li>
                        <li className=''>творческий мастер-класс</li>
                        <li className=''>книжный маркет</li>
                    </ul>
*/}
                    <p className='MiniFestivalFamilyRelicBanner__textAge'>10+</p>
                </div>
            </div>
            <NavContainer/>
        </section>
    )
}

export default MiniFestivalFamilyRelicBanner