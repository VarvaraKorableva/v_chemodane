import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lots from '../../../../data/hanukkah/lotshanukkah.js'
import Lot from './Lot'
import './LotteryHanukkah2024Pagination.css'
import Heading from '../../../../UI-Kit/Heading/Heading'
import LotterySection from '../LotterySection/LotterySection'
import Container from '../../../../UI-Kit/Container/Container'

function LotteryHanukkah2024Pagination({handleLotClick}) {
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
        <LotterySection/>
        <ul className="lots__wrapper">
                {currentLots.map((i) => (
                    <Lot
                        key={i.id}
                        item={i}
                        handleLotClick={handleLotClick}
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