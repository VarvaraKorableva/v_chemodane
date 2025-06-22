import letters from '../../../../images/mainPage/Lettersnewheader.png'
import './MainNewHeader.css'
import { Link } from 'react-router-dom';

function MainNewHeader({handleIsBurgerMainPopup, handleIsOurProjectPopup, handleOurParticipantsPopup}) {
    //const [isMenuOpen, setMenuOpen] = useState(false);

    function handleOpenPopup() {
        handleIsBurgerMainPopup()
    }
    
    function handleOurParticipantsPopupOpen() {
        handleOurParticipantsPopup()
    }

    return(
        <header className="mainNewHeader">
            <div className="mainNewHeader__nav-container">
                <Link  to={`/`} className="mainNewHeader-logo"></Link>
                <nav className="mainNewHeader-container">
                    <ul className="mainNewHeader-ul-container">  
                        {/*<li className="mainNewHeader-nav-link">
                            <Link to={'/not-ready-page'}className="mainNewHeader-link">Наша миссия</Link>
                        </li>*/}
                        <li className="mainNewHeader-nav-link">
                            <Link to={'/'}className="mainNewHeader-link">О фестивале</Link>
                        </li>
                        {/*
                        <li className="mainNewHeader-nav-link">
                            <button className="mainNewHeader-btn" onClick={handleOurParticipantsPopupOpen}>Наши участники</button>
                        </li>
                        */}
                        <li className="mainNewHeader-nav-link">
                            <button className="mainNewHeader-btn" onClick={handleIsOurProjectPopup}>Наши проекты</button>
                        </li>
                        <li className="mainNewHeader-nav-link">
                            <Link to={'/our-team'} className="mainNewHeader-link">Наша команда</Link>
                        </li>
                        <li className="mainNewHeader-nav-link">
                            <Link to={'/reviews'}className="mainNewHeader-link">Отзывы</Link>
                        </li>
                        <li className="mainNewHeader-nav-link">
                            <Link to={'/contacts'}className="mainNewHeader-link">Контакты</Link>
                        </li>
                    </ul>
                    <img src={letters} className="mainNewHeader-letters"></img>
                </nav>
                <button className="mainNewHeader-burger-btn" onClick={handleOpenPopup} type='button'></button>
            </div>
        </header>
    )
}

export default MainNewHeader