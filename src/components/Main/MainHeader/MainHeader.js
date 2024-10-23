import teamPic from '../../../images/mainPage/mainpicheader.png'
import book from '../../../images/mainPage/book.png'
import letters from '../../../images/mainPage/letters.png'
import './MainHeader.css'

function MainHeader() {
    return(
        <header className="main-header">
            <div className="main-header__nav-container">
                
                <div className="main-header-logo"></div>
                
                <img src={letters} className="main-header-letters"></img>
                <img src={book} className="main-header-book"></img>
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
                        <li className="main-header-order-link">Подать заявку на маркет</li>
                        <li className="main-header-order-link">Предложить свой МК или спектакль</li>
                    </ul>
                </nav>
                <button className="main-header-burger-btn"></button>
            </div>
            <div className="main-header__img-container">
                <img className="main-header__img" src={teamPic} alt='team picture'></img>
            </div>
            
        </header>
    )
}

export default MainHeader