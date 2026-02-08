import Container from '../../../../../UI-Kit/Container/Container'
import Heading from '../../../../../UI-Kit/Heading/Heading'
import './MainTicket.css'

export default function MainTicket() {
    return(
        <Container as="section">
            <div className='center_container_purim2025'>
                <Heading className="heading heading__F79423">Основной билет: что входит?</Heading>

                <div className='MainTicket__dots__and__round'></div>
                <div className='MainTicket__halfring'></div>
                <div className='MainTicket__dots'></div>

                <ul className='MainTicket__text__container text'>
                    <li className='MainTicket__container'>
                        <div className='MainTicket__purpalstar MainTicket__star'></div>
                        <h3 className='uppercase bold MainTicket__margintopzero'>Книжный маркет</h3>
                        <p>Новинки, бестселлеры  и раритеты от независимых издательств. Пространство, где книги становятся частью праздника.</p>
                    </li>

                    <li className='MainTicket__container'>
                        <div className='MainTicket__yellowstar MainTicket__star'></div>
                        <h3 className='uppercase bold MainTicket__margintopzero'>Встречи с писателями</h3>
                        <p>Разговоры о книгах, чтения и возможность лично пообщаться с авторами, задать вопросы и взять автограф. Особые гости фестиваля: <strong>Виктор Вахштайн</strong> (автограф-сессия состоится 4 марта), <strong>Линор Горалик</strong> и <strong>Борис Лейбов</strong> (встреча состоится 4 марта) и <strong>Евгения Пастернак</strong> (Мастер-класс 4 марта). </p>
                    </li>

                    <li className='MainTicket__container'>
                        <div className='MainTicket__pinkstar MainTicket__star'></div>
                        <h3 className='uppercase bold MainTicket__margintopzero'>Мастер-классы для разного возраста</h3>
                        <ul>
                            <li>«Пуримская мафия» для детей и подростков</li>
                            <li>Корзинки для сладостей и уникальные аксессуары с Ядвигой Шишкиной</li>
                            <li>Мастер-класс по граффити</li>
                            <li>Литературные мастер-классы</li>
                        </ul>
                    </li>

                    <li className='MainTicket__container'>
                        <div className='MainTicket__bluestar MainTicket__star'></div>
                        <h3 className='uppercase bold MainTicket__margintopzero'>Игровой уголок “Детская” для самых маленьких</h3>
                        <p>Спокойное и безопасное пространство с развивающими, сенсорными играми, читками сказок и занятиями для детей младшего возраста.</p>
                    </li>

                    <li className='MainTicket__container'>
                        <div className='MainTicket__darkbluestar MainTicket__star'></div>
                        <h3 className='uppercase bold MainTicket__margintopzero'>Оригинальная фотозона</h3>
                        <p>Для семейных пуримских фотографий</p>
                        <p>Профессиональный фотограф Елена Ростунов</p>
                    </li>

                    <li className='MainTicket__container'>
                        <div className='MainTicket__pinkstar MainTicket__star'></div>
                        <h3 className='uppercase bold MainTicket__margintopzero'>Экскурсии по музею АНУ</h3>
                        <p>Авторские туры <strong>Зеева Волка, Константина Бондаря, Зои Брук</strong> и <strong>Любы Шинкарук</strong></p>
                    </li>

                    <li className='MainTicket__container'>
                        <div className='MainTicket__yellowstar MainTicket__star'></div>
                        <h3 className='uppercase bold MainTicket__margintopzero'>Еврейская традиция</h3>
                        <p>Знакомство с пуримскими обычаями и чтение Свитка Торы в атмосфере праздника. Встреча с равином Бени Миничем.</p>
                    </li>

                    <li className='MainTicket__container'>
                        <div className='MainTicket__darkbluestar MainTicket__star'></div>
                        <h3 className='uppercase bold MainTicket__margintopzero'>Театральные представления</h3>
                        <p>Спектакли Смешного театра Риты Смирновой</p>
                    </li>

                    <li className='MainTicket__container'>
                        <div className='MainTicket__bluestar MainTicket__star'></div>
                        <h3 className='uppercase bold MainTicket__margintopzero'>Парад пуримских костюмов</h3>
                        <p>Момент, который объединяет всех — детей и взрослых — на одной сцене.</p>
                    </li>

                    <li className='MainTicket__container'>
                        <div className='MainTicket__pinkstar MainTicket__star'></div>
                        <h3 className='uppercase bold MainTicket__margintopzero'>Беспроигрышная Лотерея</h3>
                        <p>Концерт зажигательной группы <strong>Frisson Trio</strong></p>
                        <p>А также, <strong>пуримское угощение</strong> и <strong>особенная семейная атмосфера праздника</strong>.</p>
                    </li>

                    <li className='MainTicket__container'>
                        <div className='MainTicket__yellowstar MainTicket__star'></div>
                        <h3 className='uppercase bold MainTicket__margintopzero'>Стоимость основного билета</h3>
                        <p>Вход — 50 шекелей на человека.</p>
                        <p>Дети до 4 лет — бесплатно.</p>
                    </li>

                    <li>
                        <p>Обратите внимание, что на часть мероприятий необходимо приобретать</p>

                        <a href='https://anumuseum.org.il/ru/events/purim-suitcase-26/' target='_blank' className='MainTicket__btn bold'>отдельный билет</a>
                    </li>

                    <li>
                        <p>
                            Мероприятие проходит при поддержке Фонда НАДАВ и UJA Federation of New York.
                            Пурим «В чемодане» — это два дня радости и смеха. Приходите всей семьёй.
                        </p>
                    </li>
                </ul>

                <div className='MainTicket__savivon'></div>
            </div>
            
        </Container>
    )
}