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
      const interval = setInterval(nextSlide, 15000);
      return () => clearInterval(interval);
    }, []);

    return ( 
    <div className="slider">
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} to={image.link} className={`slide ${currentSlide === index ? 'active' : ''}`}>
                        <img src={image.src} alt={`Slide ${index + 1}`} />
                        {image.text?
                            <Link to={image.link} className={'slide__text-container'}>{image.text}</Link>
                            :
                            <Link to={image.link} className={'slide__link-to-event'}></Link>
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