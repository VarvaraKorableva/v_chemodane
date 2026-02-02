import React, { useState, useEffect } from 'react';
import page0 from '../../../images/slider/purim26.jpg';
import page1 from '../../../images/slider/banner_site.jpg';
import page2 from '../../../images/slider/apply.png';
import page3 from '../../../images/slider/offer.png';
import './Slider.css';

function Slider() {
    const images = [
        { id: 1, src: page0, link: 'https://anumuseum.org.il/ru/events/purim-suitcase-26/', text: '', trigger: false, newTab: false },
        { id: 2, src: page1, link: '/photo-stories-time', text: '', trigger: false },
        { id: 3, src: page2, link: 'https://forms.gle/USjZPq4y9WSDvLBy6', text: '', trigger: false, newTab: true },
        { id: 4, src: page3, link: 'https://forms.gle/N4mSMeM2ZK5Fdw7f9', text: '', trigger: false, newTab: true },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [startX, setStartX] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (startX === null) return;
        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        if (diffX > 50) {
            nextSlide();
            setStartX(null);
        } else if (diffX < -50) {
            prevSlide();
            setStartX(null);
        }
    };

    const handleTouchEnd = () => {
        setStartX(null);
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth <= 780) return;
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [windowWidth]);

    return (
        <div className="slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    <a 
                        key={image.id} href={image.link} 
                        className={`slide ${currentSlide === index ? 'active' : ''}`}
                        {...(image.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                        <div>
                            <img src={image.src} alt={`Slide ${image.id + 1}`} />
                        </div>
                    </a>
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
