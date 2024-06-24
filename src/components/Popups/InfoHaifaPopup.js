import React from 'react';
import './Popup.css'


function InfoHaifaPopup({ onClose, isInfoHaifaPopupClicked }) {

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
        <div className='infoHaifaPopup__container'>
            <button className="infoHaifaPopup__close-button" type="button" onClick={handleClick}></button>
            <h2>Важное сообщение для тех, кто любит все откладывать на последний момент!</h2>
            <p>В день Фестиваля, билеты на все активности (мастер-классы, спектакли, лекции) будут стоить дороже, чем в предварительной продаже.</p>
            <p>Вход не фестиваль <span className='infoHaifaPopup__bold-info'>свободный</span>, но участие в мастер-классах и спектаклях платные. Билеты приобретаются на каждого зрителя/участника. В программе есть бесплатные лекции, презентации книг, игротека от центра Окей.</p>
            
            <button className='infoHaifaPopup__btn' onClick={handleNeverShowMessage}>Больше не показывать это сообщение</button>
            <div className='infoHaifaPopup-up-small-orange-star'></div>
            <div className='infoHaifaPopup-up-orange-star'></div>
            
            <div className='infoHaifaPopup-small-orange-star'></div>
            <div className='infoHaifaPopup-orange-star'></div>
        </div>
      </div>
    </aside>
  );
}
  
export default InfoHaifaPopup;