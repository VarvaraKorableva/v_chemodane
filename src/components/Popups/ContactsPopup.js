import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaTelegram, FaFacebook } from 'react-icons/fa'
import './Popup.css'

function ContactsPopup({isOpen, onClose}) {
  return (
    <aside className={`navigation ${isOpen && 'navigation__opened'}`}>
      <div className='contactsPopup__container'>
        <button className='navigation__closebtn' onClick={onClose}></button>
        <ul className='navigation_listcontainer'>
            <li className='contactsPopup__link' onClick={onClose}>
                <a className='contactsPopup__contact-item-link' href='https://www.instagram.com/vchemodanefest/' target='_blank'>
                    <FaInstagram />
                </a>
            </li>
            <li className='contactsPopup__link' onClick={onClose}>
                <a className='contactsPopup__contact-item-link' href='https://www.facebook.com/vchemodanefest/' target='_blank'>
                    <FaFacebook />
                </a>
            </li>
            <li className='contactsPopup__link' onClick={onClose}>
                <a className='contactsPopup__contact-item-link' href='https://t.me/chemodanfest' target='_blank'>
                    <FaTelegram />
                </a>
            </li>
        </ul>
      </div>
    </aside>
  )
}

export default ContactsPopup;