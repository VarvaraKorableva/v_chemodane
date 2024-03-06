import logoPic from '../../images/logoch.png'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram, FaGoogle, FaFacebook } from 'react-icons/fa'
import {Link} from 'react-router-dom'

import './Header.css'

function Header() {
    return (
        <header>
            <div className="header__navbar">
                <Link className="header__logo-container" to='/main'>
                    <img src={logoPic} alt='Картинка логотипа' className="header__logo__img"></img>
                    <p className="header__logo-text">Семейный книжный фестиваль</p>
                </Link>

                <nav className="header__nav">
                    <ul className="header__links-container">
                        <li className='header__link'>
                            <a className='header__contact-item-link' href='https://www.instagram.com/vchemodanefest/' target='_blank'>
                                <FaInstagram />
                            </a>
                        </li>
                        <li className='header__link'>
                            <a className='header__contact-item-link' href='https://www.facebook.com/vchemodanefest/' target='_blank'>
                                <FaFacebook />
                            </a>
                        </li>
                        <li className='header__link'>
                            <a className='header__contact-item-link' href='https://t.me/chemodanfest' target='_blank'>
                                <FaTelegram />
                            </a>
                        </li>
                    </ul>
                
                    
                </nav>
            </div>
        </header>
    )
}

export default Header;

/*

<ul className="header__links-container">
                        <li className="header__link">Наши проекты</li>
                        <li className="header__link">Наши участники</li>
                        <li className="header__link">Маркет</li>
                        <li className="header__link">Контакты</li>
                    </ul>
*/