import './Organizers.css'
import logoVChemodame from '../../../images/logo/logovchemodane.png'
import ujFederation from '../../../images/logo/ujFederation.png'
import Nadav from '../../../images/logo/Nadav.png'

function Organizers() {
    return(
        <section className='organizers__section' id='Organizers'>
            <h2 className='organizers__title'>ОРГАНИЗАТОРЫ</h2>
            <ul className='organizers__ul-wrapper'>
                <li className='organizers__li-containerVChemodame'>
                    <img src={logoVChemodame} alt="Логотип Фестиваля ВЧемодане" className='organizers__logo'></img>
                </li>
                <li className='organizers__li-container'>
                    <img src={ujFederation} alt="Логотип UJ Federation" className='organizers__logo'></img>
                </li>
                <li className='organizers__li-containerNadav'>
                    <img src={Nadav} alt="Логотип Nadav" className='organizers__logo'></img>
                </li>
            </ul>
        </section>
    )
}

export default Organizers