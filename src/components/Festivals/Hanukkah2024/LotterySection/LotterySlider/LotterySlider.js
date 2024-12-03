import { useState, useEffect } from 'react';
import './LotterySlider.css';
import lots from '../../../../../data/hanukkah/lotshanukkah'
import { Link } from 'react-router-dom'

function LotterySlider({handleLotClick}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Отслеживаем изменение размера экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840);
    };

    handleResize(); // Проверка при монтировании
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Разбиение лотов на группы по 3, если это мобильный экран
  const groupedLots = isMobile
    ? lots
    : lots.reduce((acc, lot, index) => {
        if (index % 3 === 0) acc.push(lots.slice(index, index + 3));
        return acc;
      }, []); // Для больших экранов показываем все лоты как есть

  // Функция для перехода к следующему слайду
  const nextLot = () => {
    const step = isMobile ? 1 : 1;  // Если мобильный, шагаем по 1 элементу (группе)
    setCurrentIndex((prevIndex) => (prevIndex + step) % groupedLots.length);
  };

  // Функция для перехода к предыдущему слайду
  const prevLot = () => {
    const step = isMobile ? 1 : 1;  // Если мобильный, шагаем по 1 элементу (группе)
    setCurrentIndex((prevIndex) => (prevIndex - step + groupedLots.length) % groupedLots.length);
  };

  // Функция для перехода к конкретному слайду по индексу
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="slider__container">
      <div className="lottery__slider-container">
        <button onClick={prevLot} className="lottery-btn">
          <div className="lottery-btn-left"></div>
        </button>
        <div className="lottery">
          <ul className="lottery__ImgContainer">
            {Array.isArray(groupedLots[currentIndex])
              ? groupedLots[currentIndex].map((item) => (
                  <li key={item.id} className="lottery__ImgItem" onClick={() => handleLotClick(item)}>
                    <img src={item.img} alt={item.name} className="lotterySection__Img" />
                    <div lassName="lotterySection__text-container">
                      <p className="lotterySection__text">{item.name}</p>
                      <p className="lotterySection__title_of_text">Лот от:</p>
                      <p className="lotterySection__text">{item.whoIsPlaying}</p>
                    </div>
                  </li>
                ))
              : (
                <li key={groupedLots[currentIndex].id} className="lottery__ImgItem" onClick={() => handleLotClick(groupedLots[currentIndex])}>
                  <img src={groupedLots[currentIndex].img} alt={groupedLots[currentIndex].name} className="lotterySection__Img" />
                  <div lassName="lotterySection__text-container">
                      <p className="lotterySection__text">{groupedLots[currentIndex].name}</p>
                      <p className="lotterySection__title_of_text">Лот от:</p>
                      <p className="lotterySection__text">{groupedLots[currentIndex].whoIsPlaying}</p>

                      {/*<p className="lotterySection__text">количество лотов</p>*/}
                    </div>
                </li>
              )}
          </ul>
        </div>
        <button onClick={nextLot} className="lottery-btn">
          <div className="lottery-btn-right"></div>
        </button>
      </div>

      
      <Link to={'/hanukkah_2024/lottery'} className='lotterySection_link'>Посмотреть все лоты</Link>


      {isMobile?
      <></>
      :
      <div className="lotterySection__dots">
        {groupedLots.map((_, index) => (
          <span
            key={index}
            className={`lotterySection__dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      }
    </section>
  );
}

export default LotterySlider;
