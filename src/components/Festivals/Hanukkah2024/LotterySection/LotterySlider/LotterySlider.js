
import { useState } from 'react';
//import reviews from '../../../data/DataReviews'
import './LotterySlider.css'

function LotterySlider() {

    const reviews = [
    [  
        {
            id:1,
            img:"./images/lottery/bag.jpg",
            name:"Шоппер в Чемодане",
            description:"",
            text:"",
        },
        {
            id:2,
            img:"./images/lottery/tshirt.jpg",
            name:"Футболка",
            description:"",
            text:"",
        },
        {
            id:3,
            img:"./images/lottery/sheeps.jpg",
            name:"Овечки",
            description:"",
            text:"",
        },
    ],
    [
        {
            id:4,
            img:"./images/lottery/neckerchief.jpg",
            name:"Платок",
            description:"",
            text:"",
        },
        {
            id:5,
            img:"./images/lottery/rubinart1.jpg",
            name:"Четверо в квартире",
            description:"",
            text:'',
        },
        {
            id:6,
            img:"./images/lottery/rubinart2.jpg",
            name:"Верблюдуин",
            description:"",
            text:"Очень теплая, дружеская атмосфера - спасибо огромное!",
        },
    ],
    [    
        {
            id:7,
            img:"./images/lottery/doll.jpg",
            name:"Куколка",
            description:"",
            text:"",
        },
        {
            id:8,
            img:"./images/lottery/bookbabel.jpg",
            name:"Языки мира",
            description:"",
            text:"",
        },
        {
            id:9,
            img:"./images/lottery/bookmiribraginsky.jpg",
            name:"Книги",
            description:"",
            text:"",
        },
    ],      
    ]

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
        <section className="lotterySection__container">
            <div className="lottery__slider-container">
                <button onClick={prevReview} className="slider-btn"><div className="slider-btn-left"></div></button>
                <div className="lottery">
                    <ul className="lottery__ImgContainer">
                        {reviews[currentIndex].map((item) => (
                            <li key={item.id} className="lottery__ImgItem">
                                <img src={item.img} alt={item.name} className="lotterySection__Img" />
                            </li>
                        ))}
                    </ul>
                </div>
                <button onClick={nextReview} className="lottery-btn"><div className="lottery-btn-right"></div></button>
            </div>

            <div className="lotterySection__dots">
                {reviews.map((_, index) => (
                    <span
                        key={index}
                        className={`lotterySection__dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>

        </section>
    );
}

export default LotterySlider