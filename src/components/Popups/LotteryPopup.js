import React from 'react';
import './Popup.css'


function LotteryPopup({ lot, onClose, lotteryPopup }) {

  function handleClick() {
    onClose()
  }

  return (
    <aside className={`img-popup ${lotteryPopup? 'img-popup__opened' : ''}`}>
      <div className="img-popup__picture-container">
        <button className="img-popup__close-button" type="button" onClick={handleClick}>
        </button>
        
          <img 
            src={lot.img}
            alt='Расписание'
            className='img-popup__picture'
          />

          <p className='img-popup__name'>{lot.name}</p>

          <div className='img-popup__description'>
            {Array.isArray(lot.description) && lot.description.length > 0 ? (
              lot.description.map((i, index) => (
                <p key={index}>{i}</p>
              ))
              ) : (
              <></>
            )}
          </div>
      </div>
    </aside>
  );
}
  
export default LotteryPopup;