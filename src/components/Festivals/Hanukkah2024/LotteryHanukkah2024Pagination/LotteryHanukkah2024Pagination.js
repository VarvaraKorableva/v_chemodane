import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lots from '../../../../data/hanukkah/lotshanukkah.js'
import Lot from './Lot'
import './LotteryHanukkah2024Pagination.css'
import Heading from '../../../../UI-Kit/Heading/Heading'

function LotteryHanukkah2024Pagination() {
const navigate = useNavigate()
const lotsPerPage = 12;
const totalPages = Math.ceil(lots.length / lotsPerPage);

const [currentPage, setCurrentPage] = useState(1);

const indexOfLastLot = currentPage * lotsPerPage;
const indexOfFirstLot = indexOfLastLot - lotsPerPage;
const currentLots = lots.slice(indexOfFirstLot, indexOfLastLot);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const goBack = () => {
    navigate(-1);
  };

useEffect(() => {
    scrollToTop()
}, [])

const goToPage = (page) => {
    setCurrentPage(page);
};

return (
    <section className="lots__section">
        <p onClick={goBack} className="lots__backbtn">Hазад</p>
        <Heading>Лотерея</Heading>

        <div className='lotteryNew_text_container'>
        <h3 className='lotteryNew_text lotteryNew_text_bold'>Благотворительная лотерея на фестивале "В Чемодане"</h3>
                <p className='lotteryNew_text lotteryNew_text_margin'>Фестиваль "В Чемодане" совместно с музеем еврейского народа АНУ организует благотворительную лотерею. Собранные средства будут направлены на помощь семьям, эвакуированным с юга и севера Израиля.</p>

                <p className='lotteryNew_text'>Лоты для лотереи предоставлены:</p>
                <ul>
                    <li className='lotteryNew_text'>Независимыми издательствами и писателями</li>
                    <li className='lotteryNew_text'>Ювелирами и мастерами изделий ручной работы</li>
                    <li className='lotteryNew_text'>Израильскими русскоязычными театрами</li>
                    <li className='lotteryNew_text'>Организаторами мероприятий для детей и взрослых</li>
                </ul>

                <p className='lotteryNew_text lotteryNew_text_bold'>На благотворительную лотерею нужно приобретать билеты заранее до 26 декабря включительно. Розыгрыш состоится 27 декабря 2024 г в 13.00 на фестивале в зале ТИШ.</p>

                <h3 className='lotteryNew_title lotteryNew_title_star_container'>
                    Как участвовать?
                    <span className="lotteryNew_rounds"></span>
                </h3>
                <p className='lotteryNew_text'>Билеты можно приобрести онлайн по указанной ссылке во время фестиваля “В Чемодане” 26 и 27 декабря.</p>
                <p className='lotteryNew_text'>Вы можете купить несколько билетов, увеличивая свои шансы на победу.</p>

                <h3 className='lotteryNew_title lotteryNew_title_star_container'>
                    Место и дата розыгрыша
                    <span className="lotteryNew_star"></span>
                </h3>
                <p className='lotteryNew_text'>Дата: Пятница, 27 декабря 2024 года</p>
                <p className='lotteryNew_text'>Время: 13.00</p>
                <p className='lotteryNew_text'>Зал: ТИШ</p>

                <h3 className='lotteryNew_title'>Обратите Внимание</h3>
                <p className='lotteryNew_text'>Продажа билетов на лотерею закроется за полчаса до розыгрыша. Покупайте билеты заранее. Благотворительная Лотерея будет проводиться только среди присутствующих в зале. Если выиграл тот, кого в этот момент в зале нет, приз будет разыгрываться снова. Розыгрыш ведет Лика Длугач.</p>
                <h3 className='lotteryNew_title' id='lotspage'>Лоты</h3>
        </div>

        <ul className="lots__wrapper">
                {currentLots.map((i) => (
                    <Lot
                        key={i.id}
                        item={i}
                    />
                ))}
        </ul>

        <div className="pagination">

            <div className="pagination-pages">
                {Array.from({ length: totalPages }, (_, index) => (
                    <a href="#lotspage"
                        key={index + 1}
                        onClick={() => goToPage(index + 1)}
                        className={`pagination-page ${currentPage === index + 1 ? "active" : ""}`}
                    >
                        {index + 1}
                    </a>
                ))}
            </div>

        </div>
    </section>
);
}

export default LotteryHanukkah2024Pagination