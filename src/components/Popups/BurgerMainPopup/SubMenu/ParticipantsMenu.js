import '../BurgerMainPopup.css'
import { Link } from 'react-router-dom';

function ParticipantsMenu({onClosePopup, closeSubMenu}) {

  return(
    <div className="burger-main-popup-ourprojects-container">
        <button className="burger-main-popup-back-arrow" onClick={closeSubMenu} type="button"></button>
        <h3 className="burgerMainPopup-title">Наши участники</h3>
        <div className="burgerMainPopup__participantSubMenu">
            {/*<li className="burgerMainPopup-nav-link">
                <Link to="/not-ready-page" onClick={onClosePopup} className="burgerMainPopup-link">
                  Участники Фестиваля
                </Link>
            </li>*/}
            
            <Link to="/marker-paticipants" onClick={onClosePopup} className="burgerMainPopup-submenu-link">
              Участиники Маркета
            </Link>
          
        </div>
    </div>
    )
}

export default ParticipantsMenu