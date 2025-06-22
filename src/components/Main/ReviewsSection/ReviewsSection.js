import { useState } from 'react';
import reviews from '../../../data/DataReviews'
import './ReviewsSection.css'
import Heading from '../../../UI-Kit/Heading/Heading'
import Container from '../../../UI-Kit/Container/Container'

function ReviewsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <Container as="section" className='ourTeam-section'>
            <Heading>ОТЗЫВЫ</Heading>
            <div className="reviewsSection__slider-container">
                <button onClick={prevReview} className="slider-btn"><div className="slider-btn-left"></div></button>
                <div className="review">
                    <div className="reviewsSection__reviewImgContainer">
                        <img src={reviews[currentIndex].img} alt={reviews[currentIndex].name} className="reviewsSection__reviewImg"></img>
                    </div>
                    <div className="reviewsSection__reviewTextContainer">
                        <h3 className="reviewsSection__name">{reviews[currentIndex].name}</h3>
                        <p className="reviewsSection__job">{reviews[currentIndex].job}</p>
                        <p className="reviewsSection__text">{reviews[currentIndex].text}</p>
                    </div>
                </div>
                <button onClick={nextReview} className="slider-btn"><div className="slider-btn-right"></div></button>
            </div>

            <div className="reviewsSection__dots">
                {reviews.map((_, index) => (
                    <span
                        key={index}
                        className={`reviewsSection__dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>

        </Container>
    );
}

export default ReviewsSection;