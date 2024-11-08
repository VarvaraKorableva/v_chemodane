/*import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './BurgerMainPopup.css'

function BurgerMainPopup({isOpen, onClose }) {

  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  function toggleSubMenu() {
    setSubMenuOpen(prevState => !prevState);
  }

  function onClosePopup() {
    setSubMenuOpen(false)
    onClose()
  }


  return (
    <aside className={`burgerMainPopup ${isOpen? 'burgerMainPopup__opened' : ''}`}>
      <div className='burgerMainPopup__container'>
      <button className='burgerMainPopup__closebtn' onClick={onClosePopup}></button>
          {isSubMenuOpen? 
            <div className="burger-main-popup-ourprojects-container">
              <button className="burger-main-popup-back-arrow" onClick={toggleSubMenu} type='button'></button>  
              <h3 className="burgerMainPopup-title">Наши проекты</h3>
              <ul className="burgerMainPopup__subMenu">
                <li>
                  <p className='burgerMainPopup-subtitle'>ФЕСТИВАЛИ</p>
                  <ul className='burgerMainPopup-submenu-container'>
                    <li className='burgerMainPopup-submenu-link'>
                      <Link to='/haifa' onClick={onClosePopup}>ХАЙФА 2024</Link>
                    </li>
                    <li className='burgerMainPopup-submenu-link'>
                      <Link to='/purim' onClick={onClosePopup}>ТЕЛЬ-АВИВ 2024</Link>
                    </li>
                    <li className='burgerMainPopup-submenu-link'>ИЕРУСАЛИМ 2023</li>
                    <li className='burgerMainPopup-submenu-link'>ТЕЛЬ-АВИВ 2023</li>
                    <li className='burgerMainPopup-submenu-link'>ХАЙФА 2022</li>
                    <li className='burgerMainPopup-submenu-link'>ИЕРУСАЛИМ 2022</li>
                  </ul>
                </li>
                <li>
                  <p className='burgerMainPopup-subtitle'>СОБЫТИЯ</p>
                  <ul className='burgerMainPopup-submenu-container'>
                    <li className='burgerMainPopup-submenu-link'>
                      <Link to='/story-time' onClick={onClosePopup}>ВРЕМЯ ИСТОРИЙ, НОЯБРЬ 2024</Link>
                    </li>
                    <li className='burgerMainPopup-submenu-link'>
                      ХАНУКА, декабрь 2023
                    </li>
                    <li className='burgerMainPopup-submenu-link'>МУЗЫКАЛЬНАЯ ЛАБОРАТОРИЯ ИЛЬИ КОЛМАНОВСКОГО, ИЮЛЬ 2023</li>
                    <li className='burgerMainPopup-submenu-link'>ЛЕКЦИЯ АЛЕКСАНДРА ТОЛМАЧЕВА, 2023</li>
                    <li className='burgerMainPopup-submenu-link'>КОНЦЕРТ ГУГНИНА, ИЮНЬ 2023</li>
                    <li className='burgerMainPopup-submenu-link'>JAFFA FEST, ИЮНЬ 2022</li>
                    <li className='burgerMainPopup-submenu-link'>КОЛМАНОВСКИЙ ФЕВРАЛЬ 2023</li>
                  </ul>
                </li>
              </ul>
            </div>
          :
            <ul className='burgerMainPopup__listcontainer'>
                {/*<li className="burgerMainPopup-nav-link">
                  <Link to={'/not-ready-page'}className="burgerMainPopup-link">Наша миссия</Link>
                  </li>*/
    /*            <li className="burgerMainPopup-nav-link">
                  <Link to={'/'}className="burgerMainPopup-link">О фестивале</Link>
                </li>
                <li className="burgerMainPopup-nav-link">
                  <Link to={'/not-ready-page'}className="burgerMainPopup-link">Наши участники</Link>
                </li>
                <li className="burgerMainPopup-nav-link">
                  <button className="burgerMainPopup-link" onClick={toggleSubMenu}>Наши проекты</button>
                </li>
                <li className="burgerMainPopup-nav-link">
                  <Link to={'/our-team'}className="burgerMainPopup-link" onClick={onClosePopup}>Наша команда</Link>
                </li>
                {/*<li className="burgerMainPopup-nav-link">
                  <Link to={'/not-ready-page'}className="burgerMainPopup-link">Отзывы</Link>
                </li>*/
/*                <li className="burgerMainPopup-nav-link">
                  <Link to={'/not-ready-page'}className="burgerMainPopup-link">Контакты</Link>
                </li>
            </ul>
          }
      </div>
    </aside>
  )
}

export default BurgerMainPopup;*/

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
              <Link to="/not-ready-page" className="burgerMainPopup-link">
                Контакты
              </Link>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
}

export default BurgerMainPopup;