import logoPic from '../../images/logoch.png'
import { FaInstagram, FaTelegram, FaFacebook } from 'react-icons/fa'
import {Link} from 'react-router-dom'

import './Header.css'

function Header({handleContactsPopupOpen}) {

    function handlePopup() {
        handleContactsPopupOpen()
    }

    return (
        <header>
            <div className="header__navbar">
                <Link className="header__logo-container" to='/'>
                    <img src={logoPic} alt='Картинка логотипа' className="header__logo__img"></img>
                    <p className="header__logo-text">СЕМЕЙНЫЙ КНИЖНЫЙ ФЕСТИВАЛЬ</p>
                </Link>

                <nav className="header__nav">
                    <ul className="header__links-container">
                        <li className="header__link">О ФЕСТИВАЛЕ</li>
                        <li className="header__link">НАША МИССИЯ</li>
                        <li className="header__link">КТО МЫ</li>
                        <li className="header__link">НАШИ ПРОЕКТЫ</li>
                        <li className="header__link">ОТЗЫВЫ</li>
                        <li className="header__link">КОНТАКТЫ</li>
                    </ul>
                </nav>
                <button className='header__btn-contacts' onClick={handlePopup}></button>
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
*/