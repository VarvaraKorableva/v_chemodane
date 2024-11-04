//MainNewHeader
import letters from '../../../../images/mainPage/Lettersnewheader.png'
import './MainNewHeader.css'
import { Link } from 'react-router-dom';

function MainNewHeader() {
    return(
        <header className="mainNewHeader">
            <div className="mainNewHeader__nav-container">
                <Link  to={`/`} className="mainNewHeader-logo"></Link>
                <nav className="mainNewHeader-container">
                    <ul className="mainNewHeader-ul-container">
                        <li className="mainNewHeader-nav-link">Наша миссия</li>
                        <li className="mainNewHeader-nav-link">
                            <Link to={'/not-ready-page'}className="mainNewHeader-link">О фестивале</Link>
                        </li>
                        <li className="mainNewHeader-nav-link">
                            <Link to={'/not-ready-page'}className="mainNewHeader-link">Наши участники</Link>
                        </li>
                        <li className="mainNewHeader-nav-link">
                            <Link to={'/not-ready-page'}className="mainNewHeader-link">Наши проекты</Link>
                        </li>
                        <li className="mainNewHeader-nav-link">
                            <Link to={'/not-ready-page'}className="mainNewHeader-link">Кто мы</Link>
                        </li>
                        <li className="mainNewHeader-nav-link">
                            <Link to={'/not-ready-page'}className="mainNewHeader-link">Отзывы</Link>
                        </li>
                        <li className="mainNewHeader-nav-link">
                            <Link to={'/not-ready-page'}className="mainNewHeader-link">Контакты</Link>
                        </li>
                    </ul>
                    <img src={letters} className="mainNewHeader-letters"></img>
                </nav>
                <button className="mainNewHeader-burger-btn"></button>
            </div>
        </header>
    )
}

export default MainNewHeader