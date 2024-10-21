import React from 'react';
import './Popup.css'
import sukkotImage from '../../images/sukkot/sukkot.jpg';
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


function SukkotPopup({ onClose, isInfoHaifaPopupClicked }) {

  function handleClick() {
    onClose()
  }

  function handleNeverShowMessage() {
    localStorage.setItem('neverShowMessage', true)
    onClose()
  }

  return (
    <aside className={`img-popup ${isInfoHaifaPopupClicked? 'img-popup__opened' : ''}`}>
      <div className="img-popup__picture-container">
        <div className='sukkotPopup__container'>
            <IoCloseCircleOutline className="sukkotPopup__close-button" type="button" onClick={handleClick}/>
            <img src={sukkotImage} alt="Sukkot" className='sukkotPopup__img'/>
            <Link className="sukkotPopup__ticket-btn">Купить билеты</Link>
        </div>
      </div>
    </aside>
  );
}
  
export default SukkotPopup;