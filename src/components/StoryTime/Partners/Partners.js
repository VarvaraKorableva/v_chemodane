import './Partners.css'
import anu from '../../../images/logo/Anu.png'
import album from '../../../images/logo/albumlogo.png'
import yadvashem from '../../../images/logo/yadvashem.png'

function Partners() {
    return(
        <section className='partners__section' id="Partners">
            <div className='partners__page-pic'></div>
            <h2 className='partners__title'>ПАРТНЕРЫ</h2>
            <ul className='partners__ul-wrapper'>
                <li className='partners__li-container'>
                    <img src={anu} alt='логотип музея АНУ' className='partners__logo'></img>
                </li>
                <li className='partners__li-container'>
                    <img src={album} alt='логотип album' className='partners__logo'></img>
                </li>
                <li className='partners__li-container'>
                    <img src={yadvashem} alt='логотип yadvashem' className='partners__logo'></img>
                </li>
            </ul>
        </section>
    )
}

export default Partners