//<div className='hanukkha2025__mainInfo__ticket_pic'></div>
import React, { useState, useEffect } from 'react';
import './TicketsStickyButton.css';

const TicketsHanukkah2025Btn = ({link}) => {
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

export default TicketsHanukkah2025Btn;