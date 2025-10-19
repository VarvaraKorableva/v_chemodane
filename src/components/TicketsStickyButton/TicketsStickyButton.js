import React, { useState, useEffect } from 'react';
import './TicketsStickyButton.css';

const TicketsStickyButton = ({link}) => {
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
    <a href={link} rel="noopener noreferrer" target='_blank' className={`tickets-sticky-button ${isVisible ? 'visible' : ''}`}>
    </a>
  );
};

export default TicketsStickyButton;
