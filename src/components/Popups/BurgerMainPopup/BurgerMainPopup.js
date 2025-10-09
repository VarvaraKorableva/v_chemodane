import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMainPopup.css';
import ProjectsMenu from './SubMenu/ProjectsMenu'
import ParticipantsMenu from './SubMenu/ParticipantsMenu'

function BurgerMainPopup({ isOpen, onClose }) {
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
        
        {/* Проверяем, какое меню активное и показываем соответствующий контент */}
        {activeMenu === 'projects' ? (
          <ProjectsMenu closeSubMenu={closeSubMenu} onClosePopup={onClosePopup}/>
        ) : activeMenu === 'participants' ? (
          <ParticipantsMenu closeSubMenu={closeSubMenu} onClosePopup={onClosePopup}/>
        ) : (
          <ul className="burgerMainPopup__listcontainer">
            <li className="burgerMainPopup-nav-link">
              <Link to="/" className="burgerMainPopup-link">
                О фестивале
              </Link>
            </li>
            <li className="burgerMainPopup-nav-link">
              <button className="burgerMainPopup-link" onClick={() => openSubMenu('participants')}>
                Наши участники
              </button>
            </li>
            <li className="burgerMainPopup-nav-link">
              <button className="burgerMainPopup-link" onClick={() => openSubMenu('projects')}>
                Наши проекты
              </button>
            </li>
            <li className="burgerMainPopup-nav-link">
              <Link to="/our-team" className="burgerMainPopup-link" onClick={onClosePopup}>
                Наша команда
              </Link>
            </li>
            <li className="burgerMainPopup-nav-link">
              <Link to="/reviews" className="burgerMainPopup-link" onClick={onClosePopup}>
                Отзывы
              </Link>
            </li>
            <li className="burgerMainPopup-nav-link">
              <Link to="/contacts" className="burgerMainPopup-link" onClick={onClosePopup}>
                Контакты
              </Link>
            </li>
            <li className="burgerMainPopup-nav-link">
              <Link to={'/subscrib-page'}className="burgerMainPopup-link">Подписка на новости</Link>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
}

export default BurgerMainPopup;