import logoPic from '../../images/logoch.png'

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
                        <li className="header__link">Наши проекты</li>
                        <li className="header__link">Наши участники</li>
                        <li className="header__link">Маркет</li>
                        <li className="header__link">Контакты</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;