import logoPic from '../../images/logoch.png'
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
                        <Link className="header__link" to='/not-ready-page'>НАША МИССИЯ</Link>
                        <Link className="header__link" to='/not-ready-page'>КТО МЫ</Link>
                        <Link className="header__link" to='/not-ready-page'>НАШИ ПРОЕКТЫ</Link>
                        <Link className="header__link" to='/not-ready-page'>ОТЗЫВЫ</Link>
                        <Link className="header__link" to='/not-ready-page'>КОНТАКТЫ</Link>
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