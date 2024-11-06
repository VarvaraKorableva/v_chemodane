import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './BurgerMainPopup.css'

function BurgerMainPopup({isOpen, onClose}) {

  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  function toggleSubMenu() {
    setSubMenuOpen(prevState => !prevState);
  }

  function onClosePopup() {
    onClose()
    setSubMenuOpen(false)
  }


  return (
    <aside className={`burgerMainPopup ${isOpen && ' burgerMainPopup__opened'}`}>
      <div className='burgerMainPopup__container'>
      <button className='burgerMainPopup__closebtn' onClick={onClosePopup}></button>
          {isSubMenuOpen? 
              <div className="burger-main-popup-ourprojects-container">
              <button className="burger-main-popup-back-arrow" onClick={toggleSubMenu}></button>  
              <h3 className="burgerMainPopup-title">Наши проекты</h3>
              <ul className="burgerMainPopup__subMenu">
                <li>
                  <p className='burgerMainPopup-subtitle'>ФЕСТИВАЛИ</p>
                  <ul className='burgerMainPopup-submenu-container'>
                    <li className='burgerMainPopup-submenu-link'>
                      <Link to='/haifa'>ХАЙФА 2024</Link>
                    </li>
                    <li className='burgerMainPopup-submenu-link'>
                      <Link to='/purim'>ТЕЛЬ-АВИВ 2024</Link>
                    </li>
                    <li className='burgerMainPopup-submenu-link'>ИЕРУСАЛИМ 2023</li>
                    <li className='burgerMainPopup-submenu-link'>ТЕЛЬ-АВИВ 2023</li>
                    <li className='burgerMainPopup-submenu-link'>ХАЙФА 2022</li>
                    <li className='burgerMainPopup-submenu-link'>ИЕРУСАЛИМ 2022</li>
                  </ul>
                </li>
                <li>
                  <p className='burgerMainPopup-subtitle'>ЭВЕНТЫ</p>
                  <ul className='burgerMainPopup-submenu-container'>
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
                <li className="burgerMainPopup-nav-link">
                  <Link to={'/not-ready-page'}className="burgerMainPopup-link">Наша миссия</Link>
                </li>
                <li className="burgerMainPopup-nav-link">
                  <Link to={'/not-ready-page'}className="burgerMainPopup-link">О фестивале</Link>
                </li>
                <li className="burgerMainPopup-nav-link">
                  <Link to={'/not-ready-page'}className="burgerMainPopup-link">Наши участники</Link>
                </li>
                <li className="burgerMainPopup-nav-link">
                  <button className="burgerMainPopup-link" onClick={toggleSubMenu}>Наши проекты</button>
                </li>
                <li className="burgerMainPopup-nav-link">
                  <Link to={'/not-ready-page'}className="burgerMainPopup-link">Кто мы</Link>
                </li>
                <li className="burgerMainPopup-nav-link">
                  <Link to={'/not-ready-page'}className="burgerMainPopup-link">Отзывы</Link>
                </li>
                <li className="burgerMainPopup-nav-link">
                  <Link to={'/not-ready-page'}className="burgerMainPopup-link">Контакты</Link>
                </li>
              </ul>
          }
      </div>
    </aside>
  )
}

export default BurgerMainPopup;