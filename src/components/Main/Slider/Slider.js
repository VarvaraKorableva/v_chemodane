import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import page1 from '../../../images/slider/timestory.png'
import page2 from '../../../images/slider/apply.png'
import page3 from '../../../images/slider/offer.png'
import './Slider.css'

function Slider() {

    const images = [
        { src: page1, link: '/story-time', text: NaN },
        { src: page2, link: '/not-ready-page', text: "ПОДАТЬ ЗАЯВКУ НА МАРКЕТ" },
        { src: page3, link: '/not-ready-page', text: "ПРЕДЛОЖИТЬ СВОЙ МК ИЛИ СПЕКТАКЛЬ" },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [startX, setStartX] = useState(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
      const interval = setInterval(nextSlide, 10000);
      return () => clearInterval(interval);
    }, []);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!startX) return;
        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        if (diffX > 50) {
            nextSlide(); // Свайп влево
        } else if (diffX < -50) {
            prevSlide(); // Свайп вправо
        }

        setStartX(null); // Сброс
    };

    useEffect(() => {
        const slidesElement = document.querySelector('.slides');

        slidesElement.addEventListener('touchstart', handleTouchStart);
        slidesElement.addEventListener('touchmove', handleTouchMove);

        return () => {
            slidesElement.removeEventListener('touchstart', handleTouchStart);
            slidesElement.removeEventListener('touchmove', handleTouchMove);
        };
    }, [startX]);

    return ( 
    <div className="slider">
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
                        <img src={image.src} alt={`Slide ${index + 1}`} />
                        {image.text?
                            <Link to={image.link} className={'slide__text-container'}>{image.text}</Link>
                            :
                            <Link to={image.link} className={'slide__link-to-event-container'}>
                                <div className={'slide__link-to-event-img'}></div>
                            </Link>
                        }    
                    </div>
                ))}
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;