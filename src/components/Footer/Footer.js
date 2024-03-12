import { FaInstagram, FaTelegram, FaFacebook } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <nav className="footer__nav">
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
        </footer>
    );
}

export default Footer;