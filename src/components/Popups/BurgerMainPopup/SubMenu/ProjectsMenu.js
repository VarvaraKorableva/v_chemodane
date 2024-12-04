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
            <div className='burgerMainPopup-submenu-container'>
              
              <Link to='/hanukkah_2024' onClick={onClosePopup} className="burgerMainPopup-submenu-link">ТЕЛЬ-АВИВ, ХАНУКА, 2024</Link>
              <Link to='/haifa' onClick={onClosePopup} className="burgerMainPopup-submenu-link">ХАЙФА 2024</Link>
              <Link to='/purim' onClick={onClosePopup} className="burgerMainPopup-submenu-link">ТЕЛЬ-АВИВ 2024</Link>

              <p className='burgerMainPopup-submenu-link_notactive'>ИЕРУСАЛИМ 2023</p>
              <p className='burgerMainPopup-submenu-link_notactive'>ТЕЛЬ-АВИВ 2023</p>
              <p className='burgerMainPopup-submenu-link_notactive'>ХАЙФА 2022</p>
              <p className='burgerMainPopup-submenu-link_notactive'>ИЕРУСАЛИМ 2022</p>
            </div>
          </li>
          <li>
            <p className='burgerMainPopup-subtitle'>СОБЫТИЯ</p>
            <div className='burgerMainPopup-submenu-container'>
              <Link to='/story-time' onClick={onClosePopup} className="burgerMainPopup-submenu-link">ВРЕМЯ ИСТОРИЙ, НОЯБРЬ 2024</Link>
              <p className='burgerMainPopup-submenu-link_notactive'>ХАНУКА, декабрь 2023</p>
              <p className='burgerMainPopup-submenu-link_notactive'>МУЗЫКАЛЬНАЯ ЛАБОРАТОРИЯ ИЛЬИ КОЛМАНОВСКОГО, ИЮЛЬ 2023</p>
              <p className='burgerMainPopup-submenu-link_notactive'>ЛЕКЦИЯ АЛЕКСАНДРА ТОЛМАЧЕВА, 2023</p>
              <p className='burgerMainPopup-submenu-link_notactive'>КОНЦЕРТ ГУГНИНА, ИЮНЬ 2023</p>
              <p className='burgerMainPopup-submenu-link_notactive'>JAFFA FEST, ИЮНЬ 2022</p>
              <p className='burgerMainPopup-submenu-link_notactive'>КОЛМАНОВСКИЙ ФЕВРАЛЬ 2023</p>
            </div>
          </li>
        </ul>
      </div>
    )
}

export default ProjectsMenu