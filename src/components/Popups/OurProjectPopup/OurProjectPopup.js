
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
                  <div className='ourProjectPopup-submenu-container'>

                    <Link to='/hanukkah_2024' onClick={onClosePopup} className='ourProjectPopup-submenu-link'>ТЕЛЬ-АВИВ, ХАНУКА, 2024</Link>
                    <Link to='/haifa' onClick={onClosePopup} className='ourProjectPopup-submenu-link'>ХАЙФА 2024</Link>
                    <Link to='/purim_2024' onClick={onClosePopup} className='ourProjectPopup-submenu-link'>ТЕЛЬ-АВИВ 2024</Link>

                    <p className='ourProjectPopup-submenu-link_notactive'>ИЕРУСАЛИМ 2023</p>
                    <p className='ourProjectPopup-submenu-link_notactive'>ТЕЛЬ-АВИВ 2023</p>
                    <p className='ourProjectPopup-submenu-link_notactive'>ХАЙФА 2022</p>
                    <p className='ourProjectPopup-submenu-link_notactive'>ИЕРУСАЛИМ 2022</p>
                  </div>
                </li>
                <li>
                  <p className='ourProjectPopup-subtitle'>СОБЫТИЯ</p>
                  <div className='ourProjectPopup-submenu-container'>
                    
                    <Link to='/story-time' onClick={onClosePopup} className='ourProjectPopup-submenu-link'>ВРЕМЯ ИСТОРИЙ, НОЯБРЬ 2024</Link>
                    
                    <p className='ourProjectPopup-submenu-link_notactive'>ХАНУКА, декабрь 2023</p>
                    <p className='ourProjectPopup-submenu-link_notactive'>МУЗЫКАЛЬНАЯ ЛАБОРАТОРИЯ ИЛЬИ КОЛМАНОВСКОГО, ИЮЛЬ 2023</p>
                    <p className='ourProjectPopup-submenu-link_notactive'>ЛЕКЦИЯ АЛЕКСАНДРА ТОЛМАЧЕВА, 2023</p>
                    <p className='ourProjectPopup-submenu-link_notactive'>КОНЦЕРТ ГУГНИНА, ИЮНЬ 2023</p>
                    <p className='ourProjectPopup-submenu-link_notactive'>JAFFA FEST, ИЮНЬ 2022</p>
                    <p className='ourProjectPopup-submenu-link_notactive'>КОЛМАНОВСКИЙ ФЕВРАЛЬ 2023</p>
                  </div>
                </li>
              </ul>
            </div>
      </div>
    </aside>
  )
}

export default OurProjectPopup;