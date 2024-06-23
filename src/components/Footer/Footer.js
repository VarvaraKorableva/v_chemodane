import { FaInstagram, FaTelegram, FaFacebook } from 'react-icons/fa'
import './Footer.css'
import logoPic from '../../images/logoch.png'

function Footer() {
    return (
        <footer className='footer'>
          <img src={logoPic} alt='Картинка логотипа' className="header__logo__img"></img>
            <nav className="footer__nav">
                <div className="footer__contacts-container">
                    <p className="footer__contacts-tel"><span>Контакты: </span><span> +</span> 972 53-470-1675</p>
                </div>
                <ul className="footer__links-container">
                    <li className='footer__link'>
                      <a className='footer__contact-item-link' href='https://www.instagram.com/vchemodanefest/' target='_blank'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li className='footer__link'>
                      <a className='footer__contact-item-link' href='https://www.facebook.com/vchemodanefest/' target='_blank'>
                        <FaFacebook />
                      </a>
                    </li>
                    <li className='footer__link'>
                      <a className='footer__contact-item-link' href='https://t.me/chemodanfest' target='_blank'>
                        <FaTelegram />
                      </a>
                    </li>
                </ul>
            </nav>

            <div className='footer-star'></div>
            <div className='footer__second-orange-second-star'></div>
            <div className='footer__third-orange-star'></div>
            <div className='footer__fourth-orange-star'></div>
            <div className='footer__fifth-orange-star'></div>
  
        </footer>
    );
}

export default Footer;