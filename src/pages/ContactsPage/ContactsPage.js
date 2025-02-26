import { FaInstagram, FaTelegram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import Heading from '../../UI-Kit/Heading/Heading'
import MarkupLayout from '../../components/Layout/MarkupLayout'
import './ContactsPage.css'

function ContactsPage() {
    return(
      <MarkupLayout>
        <Heading>КОНТАКТЫ</Heading>
        <div className='ContactsPage_container'>
            <p className='ContactsPage__text ContactsPage__title'>Вы всегда можете связаться с нами по электронной почте:</p>
            <p className='ContactsPage__text'>info@vchemodane.com</p>
            <p className='ContactsPage__text ContactsPage__title'>Или любым другим способом:</p>
            <ul className="ContactsPage__links-container">
                <li className='ContactsPage__link'>
                    <a className='ContactsPage__contact-item-link' href='https://www.instagram.com/vchemodanefest/' target='_blank' rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
                <li className='ContactsPage__link'>
                    <a className='ContactsPage__contact-item-link' href='https://www.facebook.com/vchemodanefest/' target='_blank' rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                </li>
                <li className='ContactsPage__link'>
                    <a className='ContactsPage__contact-item-link' href='https://t.me/chemodanfest' target='_blank' rel="noopener noreferrer">
                        <FaTelegram />
                    </a>
                </li>
                <li className='ContactsPage__link'>
                    <a className='ContactsPage__contact-item-link' href="https://wa.me/+972534701675" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                </li>
            </ul>
        </div>
        
      </MarkupLayout>
     
    )
}

export default ContactsPage