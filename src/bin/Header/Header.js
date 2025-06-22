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