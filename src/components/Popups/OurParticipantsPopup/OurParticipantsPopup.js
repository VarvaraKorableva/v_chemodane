import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './OurParticipantsPopup.css'

function OurParticipantsPopup({ isOpen, onClose }) {
  const [activeMenu, setActiveMenu] = useState(null); // Универсальное состояние для подменю

  // Открытие подменю
  function openSubMenu(menuName) {
    setActiveMenu(menuName);
  }

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
    <aside className={`burgerMainPopup ${isOpen ? 'burgerMainPopup__opened' : ''}`}>
      <div className="burgerMainPopup__container">
        <button className="burgerMainPopup__closebtn" onClick={onClosePopup} ></button>
        <div className="burger-main-popup-ourprojects-container">
        <button className="burger-main-popup-back-arrow" onClick={closeSubMenu} type="button"></button>
        <h3 className="burgerMainPopup-title">Наши участники</h3>
        <ul className="burgerMainPopup__participantSubMenu">
            {/*<li className="burgerMainPopup-nav-link">
                <Link to="/not-ready-page" onClick={onClosePopup} className="burgerMainPopup-link">
                  Участники Фестиваля
                </Link>
            </li>*/}
            <li className="burgerMainPopup-nav-link">
                <Link to="/marker-paticipants" onClick={onClosePopup} className="burgerMainPopup-link">
                  Участиники Маркета
                </Link>
            </li>
        </ul>
       </div>
      </div>
    </aside>
  );
}

export default OurParticipantsPopup;