import React from 'react'
import { Link } from 'react-router-dom';
import './BurgerMainPopup.css'

function BurgerMainPopup({isOpen, onClose}) {
  return (
    <aside className={`burgerMainPopup ${isOpen && ' burgerMainPopup__opened'}`}>
      <div className='burgerMainPopup__container'>
      <button className='burgerMainPopup__closebtn' onClick={onClose}></button>
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
            <Link to={'/not-ready-page'}className="burgerMainPopup-link">Наши проекты</Link>
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
      </div>
    </aside>
  )
}

export default BurgerMainPopup;