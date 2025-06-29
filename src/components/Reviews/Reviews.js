import { useState } from 'react';
import reviews from '../../data/DataReviews.js'
import Review from './Review/Review'
import './Reviews.css'
import Heading from '../../UI-Kit/Heading/Heading'
import Container from '../..//UI-Kit/Container/Container'

function Reviews() {
    const reviewsPerPage = 4;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

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
        <Container as="section">
            <Heading>ОТЗЫВЫ</Heading>

            <ul className="reviews__wrapper">
                    {currentReviews.map((i) => (
                        <Review
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
        </Container>
    );
}

export default Reviews;