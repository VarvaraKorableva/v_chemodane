import { FaInstagram, FaTelegram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import Heading from '../../UI-Kit/Heading/Heading'
import Container from '../..//UI-Kit/Container/Container'
import './Contacts.css'
import contacts from '../../data/contacts.json'

function Contacts() {
    return(
      <Container as="section">
        <Heading>КОНТАКТЫ</Heading>
        <div className='ContactsPage_container'>
            <a className="ContactsPage__text" href="https://www.google.com/maps/search/?api=1&query=Tsidkiyahu%2024%20Haifa"
               target="_blank" rel="noopener noreferrer">
                {contacts[0].adressRus} — показать на карте
            </a>
            <p className='ContactsPage__text ContactsPage__title'>Вы всегда можете связаться с нами по электронной почте:</p>
            <p className='ContactsPage__text'>{`${contacts[0].email}`}</p>
            <p className='ContactsPage__text ContactsPage__title'>Или любым другим способом:</p>
            <ul className="ContactsPage__links-container">
                <li className='ContactsPage__link'>
                    <a className='ContactsPage__contact-item-link' href={`${contacts[0].instagram}`} target='_blank' rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
                <li className='ContactsPage__link'>
                    <a className='ContactsPage__contact-item-link' href={`${contacts[0].facebook}`} target='_blank' rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                </li>
                <li className='ContactsPage__link'>
                    <a className='ContactsPage__contact-item-link' href={`https://t.me/${contacts[0].telegram}`} target='_blank' rel="noopener noreferrer">
                        <FaTelegram />
                    </a>
                </li>
                <li className='ContactsPage__link'>
                    <a className='ContactsPage__contact-item-link' href={`https://wa.me/${contacts[0].whatsapp}`} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                </li>
            </ul>
        </div>
      </Container>
     
    )
}

export default Contacts