
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './OurProjectPopup.css'


function OurProjectPopup({isOpen, onClose}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleSubMenu() {
    setIsMenuOpen(prevState => !prevState);
  }

  function onClosePopup() {
    setIsMenuOpen(false)
    onClose()
  }


  return (
    <aside className={`ourProjectPopup ${isOpen? 'ourProjectPopup__opened' : ''}`}>
      <div className='ourProjectPopup__container'>
      <button className='ourProjectPopup__closebtn' onClick={onClosePopup}></button>
            <div className="ourProjectPopup-ourprojects-container">
              <h3 className="ourProjectPopup-title">Наши проекты</h3>
              <ul className="ourProjectPopup__subMenu">
                <li>
                  <p className='ourProjectPopup-subtitle'>ФЕСТИВАЛИ</p>
                  <ul className='ourProjectPopup-submenu-container'>
                    <li className='ourProjectPopup-submenu-link'>
                      <Link to='/hanukkah_2024' onClick={onClosePopup} className='ourProjectPopup-submenu-active-link'>ТЕЛЬ-АВИВ, ХАНУКА, 2024</Link>
                    </li>
                    <li className='ourProjectPopup-submenu-link'>
                      <Link to='/haifa' onClick={onClosePopup} className='ourProjectPopup-submenu-active-link'>ХАЙФА 2024</Link>
                    </li>
                    <li className='ourProjectPopup-submenu-link'>
                      <Link to='/purim' onClick={onClosePopup} className='ourProjectPopup-submenu-active-link'>ТЕЛЬ-АВИВ 2024</Link>
                    </li>
                    <li className='ourProjectPopup-submenu-link'>ИЕРУСАЛИМ 2023</li>
                    <li className='ourProjectPopup-submenu-link'>ТЕЛЬ-АВИВ 2023</li>
                    <li className='ourProjectPopup-submenu-link'>ХАЙФА 2022</li>
                    <li className='ourProjectPopup-submenu-link'>ИЕРУСАЛИМ 2022</li>
                  </ul>
                </li>
                <li>
                  <p className='ourProjectPopup-subtitle'>СОБЫТИЯ</p>
                  <ul className='ourProjectPopup-submenu-container'>
                    <li className='ourProjectPopup-submenu-link'>
                      <Link to='/story-time' onClick={onClosePopup} className='ourProjectPopup-submenu-active-link'>ВРЕМЯ ИСТОРИЙ, НОЯБРЬ 2024</Link>
                    </li>
                    <li className='ourProjectPopup-submenu-link'>
                      ХАНУКА, декабрь 2023
                    </li>
                    <li className='ourProjectPopup-submenu-link'>МУЗЫКАЛЬНАЯ ЛАБОРАТОРИЯ ИЛЬИ КОЛМАНОВСКОГО, ИЮЛЬ 2023</li>
                    <li className='ourProjectPopup-submenu-link'>ЛЕКЦИЯ АЛЕКСАНДРА ТОЛМАЧЕВА, 2023</li>
                    <li className='ourProjectPopup-submenu-link'>КОНЦЕРТ ГУГНИНА, ИЮНЬ 2023</li>
                    <li className='ourProjectPopup-submenu-link'>JAFFA FEST, ИЮНЬ 2022</li>
                    <li className='ourProjectPopup-submenu-link'>КОЛМАНОВСКИЙ ФЕВРАЛЬ 2023</li>
                  </ul>
                </li>
              </ul>
            </div>
      </div>
    </aside>
  )
}

export default OurProjectPopup;