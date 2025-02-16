import React, { useState, useEffect } from 'react';
import './TicketsStickyButton.css';

const TicketsStickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a href='https://www.anumuseum.org.il/ru/events/purim-russian/' rel="noopener noreferrer" target='_blank' className={`tickets-sticky-button ${isVisible ? 'visible' : ''}`}>
      {/*<span>Купить билеты</span>*/}
    </a>
  );
};

export default TicketsStickyButton;
