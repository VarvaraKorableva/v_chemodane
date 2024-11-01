//MainNewHeader
import letters from '../../../../images/mainPage/Lettersnewheader.png'
import './MainNewHeader.css'

function MainNewHeader() {
    return(
        <header className="mainNewHeader">
            <div className="mainNewHeader__nav-container">
                <div className="mainNewHeader-logo"></div>
                <nav className="mainNewHeader-container">
                    <ul className="mainNewHeader-ul-container">
                        <li className="mainNewHeader-nav-link">Наша миссия</li>
                        <li className="mainNewHeader-nav-link">О фестивале</li>
                        <li className="mainNewHeader-nav-link">Наши участники</li>
                        <li className="mainNewHeader-nav-link">Наши проекты</li>
                        <li className="mainNewHeader-nav-link">Кто мы</li>
                        <li className="mainNewHeader-nav-link">Отзывы</li>
                        <li className="mainNewHeader-nav-link">Контакты</li>
                    </ul>
                    <img src={letters} className="mainNewHeader-letters"></img>
                </nav>
                <button className="mainNewHeader-burger-btn"></button>
            </div>
        </header>
    )
}

export default MainNewHeader