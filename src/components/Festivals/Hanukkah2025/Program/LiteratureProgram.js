import Container from '../../../../UI-Kit/Container/Container'
import Heading from '../../../../UI-Kit/Heading/Heading'
import './Program.css'
import '../hanukkah2025.css'

export default function LiteratureProgram() {
    return(
        <Container as="section">
            <Heading className="heading heading__E5070ABD">Литературная программа</Heading>

            <div className='center_container_hanukkha2025'>
                <div className='literatureProgram__first__left__pic__hanukkha'></div>
                <ul className='text program_ul'>
                    <li>
                        <h3 className='uppercase'>Презентация новой книги Марии Парр  <span className='no-wrap'>«Оскар и Я»</span></h3>
                        <p>
                        Встреча с известной переводчицей Ольгой Дробот — разговор о тексте, переводе и историях,
                        которые стоят между строк.
                        </p>
                    </li>

                    <li className='TheatreProgram__pics__container'>
                        <h3 className='uppercase'>Встреча с детским писателем и драматургом Львом Яковлевым</h3>
                        <p>
                        Играем В СТИХИ! Будем сочинять, играть со словами и рифмами, придумывать самые неожиданные
                        образы. Приглашаются все — дети и взрослые.
                        </p>
                        <div className='literatureProgram__first__left__pic'></div>
                    </li>

                    <li>
                        <h3 className='uppercase'>Лекция о литературных ядах</h3>
                        <p>
                        Отдельный литературный взгляд на тему: С помощью чего погрузили в сон Джульетту? Какое
                        средство предложил граф Монте-Кристо для Валентины? Что было в отравленном яблоке Спящей
                        красавицы? Как яды становятся частью художественного мира и почему их используют в книгах —
                        от детектива до классики.
                        </p>
                    </li>

                    <li className='TheatreProgram__pics__container'>
                        <h3 className='uppercase'>Книжный маркет</h3>
                        <p>
                        Энциклопедии, комиксы, книги о науке и природе — от независимых магазинов Бабель Хайфа,
                        AKAK.STORE, Исрадон, детского магазина «Маша и три медведя», издательства «Август» и других
                        участников. А также арт-маркет: иллюстрации, открытки, авторские работы и подарки к Хануке.
                        </p>

                        <div className='literatureProgram__right__pic'></div>
                    </li>
                </ul>
                <div className='literatureProgram__lastPic'></div>
            </div>
        </Container>
    )
}