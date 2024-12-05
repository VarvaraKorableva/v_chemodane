import React, { useState, useEffect } from 'react';
import './TicketsStickyButton.css';

const LotteryStickyButton = () => {
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
    <a href='https://www.anumuseum.org.il/ru/events/lottery/' rel="noopener noreferrer" target='_blank' className={`lottery-sticky-button ${isVisible ? 'visible' : ''}`}>
      <span>Купить билеты на ЛОТЕРЕЮ</span>
    </a>
  );
};

export default LotteryStickyButton;
