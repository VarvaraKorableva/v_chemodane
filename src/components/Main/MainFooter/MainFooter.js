import './MainFooter.css'
import { FaInstagram, FaTelegram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Container from '../../../UI-Kit/Container/Container'

function MainFooter() {
    return(
        <Container as="footer" className="main__footer" id="footer">
            <div className="main-footer-wrapper">
                <div className="main-footer-letters-grey"></div>
                <div className="main-footer__logo-support-wrapper">
                    <div className="main-footer-contacts-container">
                        <div className="main-footer-flex">
                            <div className="main-footer-logo"></div>
                            <div>
                                <p className="main-footer__title">Контакты:</p>
                                <p className="main-footer-contacts-number">info@vchemodane.com</p>
                            </div>
                        </div>
                        <ul className="footer__links-container">
                            <li className='footer__link'>
                                <a className='footer__contact-item-link' href='https://www.instagram.com/vchemodanefest/' target='_blank' rel="noopener noreferrer">
                                <FaInstagram />
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a className='footer__contact-item-link' href='https://www.facebook.com/vchemodanefest/' target='_blank' rel="noopener noreferrer">
                                <FaFacebook />
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a className='footer__contact-item-link' href='https://t.me/chemodanfest' target='_blank' rel="noopener noreferrer">
                                <FaTelegram />
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a className='footer__contact-item-link' href="https://wa.me/+972534701675" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                                </a>
                            </li>
                        </ul>
                        <Link to='/privacy-policy' className="privacy-policy-link">Политика конфиденциальности</Link>
                        
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MainFooter