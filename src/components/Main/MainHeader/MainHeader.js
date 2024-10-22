import teamPic from '../../../images/mainPage/mainpicheader.png'
import './MainHeader.css'

function MainHeader() {
    return(
        <header className="main-header">
            <div className="main-header__nav-container">
                <div className="main-header-logo"></div>
                {/*<div className="main-header-letters"></div> */}
                <nav className="main-header-container">
                    <ul className="main-header-ul-container">
                        <li className="main-header-nav-link">О фестивале</li>
                        <li className="main-header-nav-link">Наша миссия</li>
                        <li className="main-header-nav-link">Кто мы</li>
                        <li className="main-header-nav-link">Наши участники</li>
                        <li className="main-header-nav-link">Наши проекты</li>
                        <li className="main-header-nav-link">Отзывы</li>
                        <li className="main-header-nav-link">Контакты</li>
                    </ul>
                
                <ul className="main-header-ul-order-container">
                    <li className="main-header-nav-link">Подать заявку на маркет</li>
                    <li className="main-header-nav-link">Предложить свой МК или спектакль</li>
                </ul>
                </nav>
            </div>
            <div className="main-header__img-container">
                <img src={teamPic}></img>
            </div>
            
        </header>
    )
}

export default MainHeader