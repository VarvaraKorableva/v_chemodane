import React from 'react';
import './Popup.css'


function ImagePopup({ card, onClose, imgPopup }) {

  function handleClick() {
    onClose()
    console.log('click')
  }

  return (
    <aside className={`img-popup ${imgPopup? 'img-popup__opened' : ''}`}>
      <div className="img-popup__picture-container">
        <button className="img-popup__close-button" type="button" onClick={handleClick}>
        </button>
        <div>
          <img 
            src={card}
            alt='Расписание'
            className='img-popup__picture'
          />
        </div>
      </div>
    </aside>
  );
}
  
export default ImagePopup;