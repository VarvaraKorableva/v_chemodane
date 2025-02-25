import './MainFooter.css'
import { FaInstagram, FaTelegram, FaFacebook, FaWhatsapp } from 'react-icons/fa'


function MainFooter() {
    return(
        <footer className="main__footer" id="footer">
           {/*<div className="main-footer-book-page"></div>*/}
            <div className="main-footer-wrapper">
                <div className="main-footer-letters-grey"></div>
                <div className="main-footer__logo-support-wrapper">
                    <div className="main-footer-contacts-container">
                        <div className="main-footer-flex">
                            <div className="main-footer-logo"></div>
                            <div>
                                <p className="main-footer__title">Контакты:</p>
                                <p className="main-footer-contacts-number">info@vchemodane.com</p>
                            </div>
                        </div>
                        <ul className="footer__links-container">
                            <li className='footer__link'>
                                <a className='footer__contact-item-link' href='https://www.instagram.com/vchemodanefest/' target='_blank' rel="noopener noreferrer">
                                <FaInstagram />
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a className='footer__contact-item-link' href='https://www.facebook.com/vchemodanefest/' target='_blank' rel="noopener noreferrer">
                                <FaFacebook />
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a className='footer__contact-item-link' href='https://t.me/chemodanfest' target='_blank' rel="noopener noreferrer">
                                <FaTelegram />
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a className='footer__contact-item-link' href="https://wa.me/+972534701675" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter
/*
function MainFooter() {
    return(
        <footer className="main__footer">
           <div className="main-footer-book-page"></div>
            <div className="main-footer-wrapper">
                <div className="main-footer-letters-grey"></div>
                <div className="main-footer__logo-support-wrapper">
                    <div className="main-footer-logo"></div>
                    <div className="main-footer-contacts-container">
                        <p className="main-footer__title">Контакты:</p>
                        <p className="main-footer-contacts-number">info@vchemodane.com</p>
                        <ul className="footer__links-container">
                            <li className='footer__link'>
                                <a className='footer__contact-item-link' href='https://www.instagram.com/vchemodanefest/' target='_blank'>
                                <FaInstagram />
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a className='footer__contact-item-link' href='https://www.facebook.com/vchemodanefest/' target='_blank'>
                                <FaFacebook />
                                </a>
                            </li>
                            <li className='footer__link'>
                                <a className='footer__contact-item-link' href='https://t.me/chemodanfest' target='_blank'>
                                <FaTelegram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter



<div className="main-footer__support-wrapper">
                    <p className="main-footer__title">ПРИ ПОДДЕРЖКЕ:</p>
                    <ul className="main-footer__support-container">
                        <li className="main-footer__support-li">Центр Наследия Менахема Бегина</li>
                        <li className="main-footer__support-li">Отдел Абсорбции Иерусалима</li>
                        <li className="main-footer__support-li">Совет Поселений иудеи и Самарии</li>
                        <li className="main-footer__support-li">Хайфское Управление Интеграции</li>

                        <li className="main-footer__support-li">Хайфские Музеи</li>
                        <li className="main-footer__support-li">Музей Еврейского Народа АНУ</li>
                        <li className="main-footer__support-li">Фонд Надав</li>
                        <li className="main-footer__support-li">Отдел Абсорбции Г Реховот</li>
                    </ul>
                </div>
*/