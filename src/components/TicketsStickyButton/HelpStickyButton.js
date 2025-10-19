import React, { useState, useEffect } from 'react';
import './TicketsStickyButton.css';
import { FaWhatsapp } from 'react-icons/fa'
import contacts from '../../data/contacts.json'

const HelpStickyButton = ({link}) => {
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
    <a href={`https://wa.me/${contacts[0].whatsapp}`} rel="noopener noreferrer" target='_blank' className={`help-sticky-button ${isVisible ? 'visible' : ''}`}>
        <FaWhatsapp /> Вопросы?
    </a>        
  );
};

export default HelpStickyButton;
