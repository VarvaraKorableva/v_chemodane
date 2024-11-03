import './CardsContainer.css'

function CardsContainer() {
    return(
        <section className="cardsContainer__section" id="aboutProject">
            <ul className="cardsContainer__wrapper">
                <li className="cardsContainer__li">
                    <div className="cardsContainer__pic-lines"></div>
                    <div className="cardsContainer__title-container">
                        <h3 className="cardsContainer__subtitle_main">СЕМЕЙНАЯ ОНЛАЙН ЛАБОРАТОРИЯ</h3>
                        <h1 className="cardsContainer__title_main">ВРЕМЯ ИСТОРИЙ</h1>
                    </div>    
                    <h3 className="cardsContainer__subtitle">ДЛЯ ТЕХ, КТО</h3>
                    <ul className="cardsContainer__container">
                        <li className="cardsContainer__li_for">Хочет интересно рассказать детям историю своей семьи, но не знает, с чего и как начать;</li>
                        <li className="cardsContainer__li_for">Всё время откладывает разбор семейного архива и не может найти на это время и вдохновение;</li>
                        <li className="cardsContainer__li_for">Мечтает узнать правду о своей семейной легенде;</li>
                        <li className="cardsContainer__li_for">Хочет начать вести цифровой семейный архив.</li>
                    </ul>
                    <div className="cardsContainer__pic-linesdown"></div>
                </li>
                <li className="cardsContainer__li">
                    <h3 className="cardsContainer__second-card-title">КАК БУДЕТ ПРОХОДИТЬ ПРОГРАММА</h3>
                     <ul className="cardsContainer__second-card-ul">
                        <li className="cardsContainer__li_for">Раз в неделю онлайн-встречи со специалистами по архивным исследованиям и музейными педагогами. Они помогут вам задать правильные вопросы к вашей истории и найти недостающую информацию.</li>
                        <li className="cardsContainer__li_for">При поддержке художественного куратора вы оформите результаты исследования в цифровой альбом или придумаете собственный арт-объект.</li>
                        <li className="cardsContainer__li_for">Участвовать можно и нужно всей семьей. Лекции в зуме — для взрослых.</li>
                        <li className="cardsContainer__li_for">Эксклюзивные визиты в музеи АНУ и Яд Вашем в сопровождении сотрудников музеев и кураторов программы.</li>
                        <li className="cardsContainer__li_for">Доступ к специальной цифровой платформе для сохранения семейных фотографий и историй Album.</li>
                        <li className="cardsContainer__li_for">Программа на русском языке.</li>
                        <li className="cardsContainer__li_for">Участие бесплатное.</li>
                     </ul>
                     <div className="cardsContainer__pic-forsecondcard"></div>
                </li>
                <li className="cardsContainer__li">
                    <h3 className="cardsContainer__second-card-title">ЧТО ВЫ ПОЛУЧИТЕ ОТ ПРОГРАММЫ?</h3>
                     <ul className="cardsContainer__second-card-ul">
                        <li className="cardsContainer__li_for">Объединяющий досуг с детьми и старшими поколениями, создание общими усилиями арт-объекта, который, возможно, станет вашей семейной реликвией.</li>
                        <li className="cardsContainer__li_for">Знакомство с технологией работы в архивах и цифровых платформах для хранения информации.</li>
                        <li className="cardsContainer__li_for">Возможность поучаствовать в  выставке “My family story” в музее АНУ в июне.</li>
                        <li className="cardsContainer__li_for">Цифровой фотоальбом семьи с аудиоисториями, которым можно поделиться со всеми важными для вас людьми.</li>
                        <li className="cardsContainer__li_for">Призы и сюрпризы для тех, кто дойдет до финала.</li>
                     </ul>
                     <div className="cardsContainer__pic-forthirdcard"></div>
                </li>
                <li className="cardsContainer__li">
                    <h3 className="cardsContainer__second-card-title-forthcard">КАК УЧАСТВОВАТЬ?</h3>
                    <div className="cardsContainer__key-pic"></div>
                    <ul className="cardsContainer__second-card-ul">
                        <li className="cardsContainer__li_for">Заполните <a href={'https://forms.gle/yRaz25gniLuf1ZtZ6'} target="_blank" className="cardsContainer__questionnaire-link">анкету</a> для участия.</li>
                        <li className="cardsContainer__li_for">Участвуйте в зум-встрече проекта- ссылка на встречу будет доступна, после регистрации.</li>
                    </ul>
                    <div className="cardsContainer__time-container">
                        <h3 className="cardsContainer__time">12 НОЯБРЯ В 19:00</h3>
                        <p className="cardsContainer__place">(по Иерусалиму)</p>
                    </div>
                    <div className="cardsContainer__feather-pic"></div>
                    <h3 className="cardsContainer__strong-text">ПРИСОЕДИНЯЙТЕСЬ И ОСТАВЬТЕ СЛЕД В ИСТОРИИ!</h3>
                    <div className="cardsContainer__pic-linesdown"></div>
                </li>
            </ul>
        </section>
    )
}

export default CardsContainer