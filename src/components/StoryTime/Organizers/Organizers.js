import './Organizers.css'
import logoVChemodame from '../../../images/mainPage/logobottom.png'
import ujFederation from '../../../images/logo/ujFederation.png'
import Nadav from '../../../images/logo/nadav.png'

function Organizers() {
    return(
        <section className='organizers__section' id='Organizers'>
            <div className='organizers__page-pic'></div>
            <h2 className='organizers__title'>ОРГАНИЗАТОРЫ</h2>
            <ul className='organizers__ul-wrapper'>
                <li className='organizers__li-container organizers__li-containerlogoVChemodame'>
                    <img src={logoVChemodame} alt="Логотип Фестиваля ВЧемодане" className='organizers__logo'></img>
                </li>
                <li className='organizers__li-container'>
                    <img src={ujFederation} alt="Логотип UJ Federation" className='organizers__logo'></img>
                </li>
                <li className='organizers__li-container organizers__li-containerlogoNadav'>
                    <img src={Nadav} alt="Логотип Nadav" className='organizers__logo'></img>
                </li>
            </ul>
        </section>
    )
}

export default Organizers