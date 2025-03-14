import Heading from '../../../../UI-Kit/Heading/HeadingClean'
import './ImportantNotes.css'
function ImportantNotes() {

    const ticketPurchasingSystem = [
        {
            id: 1,
            title: "Билет на фестиваль только в зал ТИШ (без спектаклей)",
            price: "65 ₪",
            link: "",
            btn: NaN
        },
        {
            id: 2,
            title: "Полный билет на фестиваль (всё включено)",
            price: "100 ₪",
            link: "",
            btn: NaN
        },
        {
            id: 3,
            title: "Семейный билет на 3 человека (всё включено)",
            price: "255 ₪",
            link: "",
            btn: NaN
        },
        {
            id: 4,
            title: "Семейный билет на 4 человека (всё включено)",
            price: "340 ₪",
            link: "",
            btn: NaN
        },
        {
            id: 5,
            title: "Билет на спектакль «Вещи» возможно приобрести отдельно, без покупки билета на фестиваль",
            price: "",
            link: "https://www.anumuseum.org.il/ru/events/arbuzz/",
            btn: "Купить"
        },
        {
            id: 6,
            title: "Детям до 5 лет",
            price: "Бесплатно",
            link: "",
            btn: NaN
        },
    ]

    const costumeWork = [
        {
            id: 1,
            title: "Костюмерная работает для взрослых гостей фестиваля (14+)",
            titleNotes: "",
            time: "с 13 до 18",
            note: "(до начала парада костюмов)"
        },
        {
            id: 2,
            title: "Сеансы перевоплощений",
            titleNotes: "Здесь вы можете создать свой уникальный образ, используя невероятные наряды из коллекции Валерии Яковлевой, сделать яркий макияж и поучаствовать в профессиональной фотосессии. Запись на сеансы — в зале ТИШ у сцены. По окончанию сеанса мы попросим вас вернуть костюмы в костюмерную.",
            time: "",
            note: "Каждые полчаса"
        },
    ]

    return (
        <section className='importantNotes__section' id='importantNotes_purim_2025'>
            <div className='importantNotes__squares-container'>
                <Heading>Важные примечания</Heading>
                <div className='importantNotes__squares'></div>
            </div>
            <h3 className='importantNotes__subtitle'>Правила посещения мероприятий и часы работы фестиваля</h3>
            <div className='importantNotes__important-container'>
            <div>
            <p className='importantNotes__text'>В вокресенье 16 марта фестиваль начинает работу в 12:00</p>
            <p className='importantNotes__text'>На некоторые мастер-классы и экскурсии ведущие не могут принять более определенного числа посетителей. Это будет некомфортно ни для гостей, ни для ведущих. Поэтому для того, чтобы попасть на нужные активности, нужна регистрация.</p>
            <p className='importantNotes__text'>Регистрация будет проходить в дни фестиваля прямо на стойке Ресепшн Главный вход Музея АНУ. Когда вы придёте на фестиваль, необходимо подойти на стойку регистрации, чтобы записаться.</p>
            <p className='importantNotes__text'>Многие активности повторяются, как раз для того, чтобы смогло попасть, как можно большее количество участников.</p>
            <div className='importantNotes__flex-container'>
                <h3 className='importantNotes__subtitle'>Регистрация проводится на</h3>
                <div className='importantNotes__triangles'></div>
            </div>
            <ul className='importantNotes__wrapper'>
                <li className='importantNotes__li'>1. Бои на мечах в 13.00, 13.30, 14.00 и 14.30. (Максимум 10 человек на сеанс)</li>
                <li className='importantNotes__li'>2. Авторскую экскурсию для взрослых по музею АНУ с гидом Асей Фикс в 13.30 и 15.30. (Максимум по 25 человек на каждый сеанс)</li>
                <li className='importantNotes__li'>3. Театрализованную пуримскую экскурсию по Музею АНУ с Сашей Андреевой в 14.00 и 16.00. (Максимум 15 детей на каждый сеанс)</li>
                <li className='importantNotes__li'>4. На мастер-класс Аси Финкельштейнпо созданию ювелирного  украшения в 14.00. (Максимум 15 человек)</li>
                <li className='importantNotes__li'>5. Квиддич в 15.00 и 16.00. (Максимум 20 человек на сеанс)</li>
                <li className='importantNotes__li'>6. На мастер-класс по созданию мультфильма своими руками «Синий домик в чемодане» в 16.00. (Максимум 13 человек)</li>
            </ul>


            <h3 className='importantNotes__subtitle'>система покупки билетов</h3>
            <ul className='importantNotes__wrapper'>
                {
                   ticketPurchasingSystem.map((i) => (
                       <li key={i.id} className='importantNotes__container'>
                           <p className='importantNotes__title'>{i.title}</p>

                           {i.btn? 
                                <a href={`${i.link}`} className='importantNotes__buy-tikets-btn' target="_blank" rel="noopener noreferrer">{i.btn}</a>
                            :
                                <p className='importantNotes__ticketPurchasingSystemPrice'>{i.price}</p>
                            }
                       </li>
                   )) 
                }
            </ul>

            <div className='importantNotes__triangles-container'>
                <div className='importantNotes__triangle-pink-violet importantNotes__triangle-color'></div>
                <div className='importantNotes__triangles'></div>
            </div>

            <h3 className='importantNotes__subtitle'>работа костюмерной</h3>
            <ul className='importantNotes__wrapper'>
                {
                    costumeWork.map((i) => (
                        <li key={i.id} className='importantNotes__container importantNotes__secondcontainer'>
                            <div className='importantNotes__title_container'>
                                <p className='importantNotes__title importantNotes__title-notes-tel'>{i.title}</p>
                                <p className='importantNotes__title-notes'>{i.titleNotes}</p>
                            </div>
                            <p className='importantNotes__time-container'>
                                {i.time}
                                <span className='importantNotes__note'> {i.note}</span>
                            </p>
                        </li>
                    ))
                }
            </ul>

            <div className='importantNotes__triangles-container'>
                <div className='importantNotes__triangle-yellow-violet importantNotes__triangle-color'></div>
                <div className='importantNotes__triangles'></div>
            </div>

            <h3 className='importantNotes__subtitle'>спектакль «Вещи»</h3>
            <p className='importantNotes__text'>Для спектакля «Вещи» зрители могут принести какой-то памятный предмет, который станет частью спектакля. Не волнуйтесь, после показа вам всё вернут!</p>
            
            <div className='importantNotes__triangles-container'>
                <div className='importantNotes__triangle-blue-violet importantNotes__triangle-color'></div>
                <div className='importantNotes__triangles'></div>
            </div>

            <h3 className='importantNotes__subtitle'>Студия Линогравюры Ильи Diliago Викторова «ОТТИСК-ШМОТТИСК»</h3>
            <p className='importantNotes__text'>На маркетe будет работать студия Линогравюры Ильи Diliago Викторова «Оттиск-шмоттиск». Если вы принесёте футболку или шоппер, то сможете бесплатно нанести на них рисунок из ассортимента студии.</p>
            
            <div className='importantNotes__triangles-container'>
                <div className='importantNotes__triangle-yellow-blue importantNotes__triangle-color'></div>
                <div className='importantNotes__triangles'></div>
            </div>

            

            </div>

            <div className='importantNotes__pics-container'>
                <div className='importantNotes__pics-first'>
                </div>
                <div className='importantNotes__pics-second'>
                </div>
                <div className='importantNotes__pics-third'>
                </div>
                <div className='importantNotes__pics-last'>
                </div>
            </div>
            </div>
            <div className='importantNotes__threelinesofsquares'></div>

        </section>
    )
}

export default ImportantNotes