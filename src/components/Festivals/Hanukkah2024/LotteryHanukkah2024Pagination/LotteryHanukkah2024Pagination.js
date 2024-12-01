import { useState } from 'react';
import lots from '../../../../data/hanukkah/lotshanukkah.js'
import Lot from './Lot'
import './LotteryHanukkah2024Pagination.css'
import Heading from '../../../../UI-Kit/Heading/Heading'

function LotteryHanukkah2024Pagination() {
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

const goToPage = (page) => {
    setCurrentPage(page);
    scrollToTop()
};

return (
    <section className="lots__section">
        <Heading>Лотерея</Heading>

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
                    <button
                        key={index + 1}
                        onClick={() => goToPage(index + 1)}
                        className={`pagination-page ${currentPage === index + 1 ? "active" : ""}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

        </div>
    </section>
);
}

export default LotteryHanukkah2024Pagination