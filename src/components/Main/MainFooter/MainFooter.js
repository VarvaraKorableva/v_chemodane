import './MainFooter.css'

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
                        <ul className="main-footer__icons-container">
                            <li className="main-footer__icon-facebook"></li>
                            <li className="main-footer__icon-instagram"></li>
                            <li className="main-footer__icon-tg"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter


/*
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