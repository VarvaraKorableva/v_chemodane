import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './OurParticipantsPopup.css'
import '../OurProjectPopup/OurProjectPopup.css'

function OurParticipantsPopup({ isOpen, onClose }) {
  const [activeMenu, setActiveMenu] = useState(null);

  // Закрытие всех подменю
  function closeSubMenu() {
    setActiveMenu(null);
  }

  // Закрытие попапа
  function onClosePopup() {
    closeSubMenu();
    onClose();
  }

  return (
    <aside className={`burgerMainPopup ${isOpen ? 'ourProjectPopup__opened' : ''}`}>
      <div className="ourProjectPopup__container">
        <button className="burgerMainPopup__closebtn" onClick={onClosePopup}></button>
        <div className="burger-main-popup-ourprojects-container">
        <h3 className="burgerMainPopup-title">Наши участники</h3>
        <div className="burgerMainPopup__participantSubMenu">
            {/*<li className="burgerMainPopup-nav-link">
                <Link to="/not-ready-page" onClick={onClosePopup} className="burgerMainPopup-link">
                  Участники Фестиваля
                </Link>
            </li>*/}
          <Link to="/marker-participants" onClick={onClosePopup} className="burgerMainPopup-submenu-link">
            Участники Маркета
          </Link>
        </div>
       </div>
      </div>
    </aside>
  );
}

export default OurParticipantsPopup;