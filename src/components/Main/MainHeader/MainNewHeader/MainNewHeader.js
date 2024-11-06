import letters from '../../../../images/mainPage/Lettersnewheader.png'
import './MainNewHeader.css'
import { Link } from 'react-router-dom';

function MainNewHeader({handleIsBurgerMainPopup}) {
    //const [isMenuOpen, setMenuOpen] = useState(false);

    function handleOpenPopup() {
        handleIsBurgerMainPopup()
    }
    /*
    function toggleSubMenu() {
        setMenuOpen(prevState => !prevState);
    }*/

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
                        {/*<li className="mainNewHeader-nav-link">
                            <Link to={'/not-ready-page'}className="mainNewHeader-link">Отзывы</Link>
                        </li>*/}
                        <li className="mainNewHeader-nav-link">
                            <Link to={'/not-ready-page'}className="mainNewHeader-link">Контакты</Link>
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