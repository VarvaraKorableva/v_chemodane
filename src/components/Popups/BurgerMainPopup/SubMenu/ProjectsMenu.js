import '../BurgerMainPopup.css'
import { Link } from 'react-router-dom';

function ProjectsMenu({onClosePopup, closeSubMenu}) {
    return (
        <div className="burger-main-popup-ourprojects-container">
        <button className="burger-main-popup-back-arrow" onClick={closeSubMenu} type='button'></button>  
        <h3 className="burgerMainPopup-title">Наши проекты</h3>
        <ul className="burgerMainPopup__subMenu">
          <li>
            <p className='burgerMainPopup-subtitle'>ФЕСТИВАЛИ</p>
            <ul className='burgerMainPopup-submenu-container'>
              <li className='burgerMainPopup-submenu-link'>
                <Link to='/haifa' onClick={onClosePopup} className="burgerMainPopup-link">ХАЙФА 2024</Link>
              </li>
              <li className='burgerMainPopup-submenu-link'>
                <Link to='/purim' onClick={onClosePopup} className="burgerMainPopup-link">ТЕЛЬ-АВИВ 2024</Link>
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
                <Link to='/story-time' onClick={onClosePopup} className="burgerMainPopup-link">ВРЕМЯ ИСТОРИЙ, НОЯБРЬ 2024</Link>
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
    )
}

export default ProjectsMenu