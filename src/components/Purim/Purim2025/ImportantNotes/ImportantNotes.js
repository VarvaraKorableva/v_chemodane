import Heading from '../../../../UI-Kit/Heading/HeadingClean'
import './ImportantNotes.css'
function ImportantNotes() {

    const ticketPurchasingSystem = [
        {
            id: 1,
            title: "Билет на фестиваль только в зал ТИШ (без спектаклей, некоторых Мастер Классов и литературной программы)",
            price: "65 ₪",
        },
        {
            id: 2,
            title: "Полный билет на фестиваль (всё включено)",
            price: "100 ₪",
        },
        {
            id: 3,
            title: "Детям до 5 лет",
            price: "Бесплатно",
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
        <section className='importantNotes__section'>
            <div className='importantNotes__squares-container'>
                <Heading>Важные примечания</Heading>
                <div className='importantNotes__squares'></div>
            </div>
            <h3 className='importantNotes__subtitle'>система покупки билетов</h3>
            <ul className='importantNotes__wrapper'>
                {
                   ticketPurchasingSystem.map((i) => (
                       <li key={i.id} className='importantNotes__container'>
                           <p className='importantNotes__title'>{i.title}</p>
                           <p className='importantNotes__ticketPurchasingSystemPrice'>{i.price}</p>
                       </li>
                   )) 
                }
            </ul>
            <h3 className='importantNotes__subtitle'>работа костюмерной</h3>
            <ul className='importantNotes__wrapper'>
                {
                    costumeWork.map((i) => (
                        <li key={i.id} className='importantNotes__container'>
                            <div>
                                <p className='importantNotes__title'>{i.title}</p>
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
            <h3 className='importantNotes__subtitle'>спектакль "Вещи"</h3>
            <p className='importantNotes__text'>Для спектакля "Вещи" зрители могут принести какой-то памятный предмет, который станет частью спектакля. Не волнуйтесь, после показа вам всё вернут!</p>
            <h3 className='importantNotes__subtitle'>Дильяго</h3>
            <p className='importantNotes__text'>На маркетe будет работать студия Линогравюры Ильи Diliago Викторова «Оттиск-шмоттиск». Если вы принесёте футболку или шоппер, то сможете бесплатно нанести на них рисунок из ассортимента студии.</p>

            <div className='importantNotes__triangles'></div>
        </section>
    )
}

export default ImportantNotes