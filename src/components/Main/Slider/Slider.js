import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import page1 from '../../../images/slider/timestory.png'
import page2 from '../../../images/slider/apply.png'
import page3 from '../../../images/slider/offer.png'
import './Slider.css'

function Slider() {

    const images = [
        { id: 1, src: page1, link: '/story-time', text: NaN },
        { id: 2, src: page2, link: 'https://forms.gle/USjZPq4y9WSDvLBy6', text: "ПОДАТЬ ЗАЯВКУ НА МАРКЕТ" },
        { id: 3, src: page3, link: 'https://forms.gle/N4mSMeM2ZK5Fdw7f9', text: "ПРЕДЛОЖИТЬ СВОЙ МК ИЛИ СПЕКТАКЛЬ" },
        { id: 4, src: page1, link: '/story-time', subtext: 'СЕМЕЙНАЯ ОНЛАЙН ЛАБОРАТОРИЯ',lastcall: 'OPEN CALL до 11.11.24',text: "ВРЕМЯ ИСТОРИЙ" },
    ];
/*
    const [currentSlide, setCurrentSlide] = useState(0);

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
      const interval = setInterval(nextSlide, 8000);
      return () => clearInterval(interval);
    }, []);

*/


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

const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
};

const handleTouchMove = (e) => {
    if (startX === null) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
        nextSlide();
        setStartX(null); // Reset startX to prevent multiple calls
    } else if (diffX < -50) {
        prevSlide();
        setStartX(null); // Reset startX to prevent multiple calls
    }
};

const handleTouchEnd = () => {
    setStartX(null); // Reset on touch end
};

useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
}, []);

    return ( 
    <div className="slider"
        onTouchStart={handleTouchStart} 
        onTouchMove={handleTouchMove} 
        onTouchEnd={handleTouchEnd}>
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    image.text ? 
                    <a key={image.id} href={image.link} target='_blank' className={`slide ${currentSlide === index ? 'active' : ''}`}>
                        <div>
                            <img src={image.src} alt={`Slide ${index + 1}`} />
                        </div>
                        <div className='slide__text-container'>
                            <p className='slide__text-subtitle'>{image.subtext}</p>
                            <p className='slide__text'>{image.text}</p>
                            <p className='slide__text-lastcall'>{image.lastcall}</p>
                        </div>
                    </a>
                     :   
                    <Link key={image.id} to={image.link} className={`slide ${currentSlide === index ? 'active' : ''}`}>
                        <div>
                            <img src={image.src} alt={`Slide ${index + 1}`} />
                        </div>
                        <div className={'slide__link-to-event-container'}></div>
                    </Link>
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