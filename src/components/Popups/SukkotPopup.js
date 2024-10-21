import React from 'react';
import './Popup.css'
import sukkotImage from '../../images/sukkot/sukkot.jpg';
import { IoCloseCircleOutline } from "react-icons/io5";


function SukkotPopup({ onClose, isSukkotPopupClicked }) {

  function handleClick() {
    onClose()
  }

  return (
    <aside className={`img-popup ${isSukkotPopupClicked? 'img-popup__opened' : ''}`}>
      <div className="img-popup__picture-container">
        <div className='sukkotPopup__container'>
            
            <img src={sukkotImage} alt="Sukkot" className='sukkotPopup__img'/>
            <a href="https://www.anumuseum.org.il/ru/events/sukkot-suitcase/?fbclid=IwY2xjawGCLVFleHRuA2FlbQEwAAEd4jlLTrOwyIaAqmimphE_oYeG5QEXgeF6FuDmhxRW7fNu04pr0zJWJfs9_aem_BudIS07TxBtfJb4nxE1B9g#anu_tickets_sales" className="sukkotPopup__ticket-btn" target="_blank" rel="noopener noreferrer">
                Купить билеты
            </a>
            <a href="https://www.facebook.com/share/bPL9zPKkbazNpRYF/?mibextid=9l3rBW" className="sukkotPopup__event-btn" target="_blank" rel="noopener noreferrer">
                Узнать больше
            </a> 
            
        </div>
      </div>
    </aside>
  );
}
  
export default SukkotPopup;

//<IoCloseCircleOutline className="sukkotPopup__close-button" type="button" onClick={handleClick}/>