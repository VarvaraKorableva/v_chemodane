import { useState, useEffect } from 'react';
import './LotterySlider.css';

function LotterySlider() {
  const lots = [
    { id: 1, img: "./images/lottery/bag.jpg", name: "Шоппер", whoIsPlaying: "Фестиваль в Чемодане", description:"", },
    { id: 2, img: "./images/lottery/tshirt.jpg", name: "Футболка", whoIsPlaying: "Фестиваль в Чемодане", description:"", },
    { id: 3, img: "./images/lottery/sheeps.jpg", name: "Игрушка-овечка", whoIsPlaying: "Елены Павловой", description:"", },
    { id: 4, img: "./images/lottery/neckerchief.jpg", name: "Платок", whoIsPlaying: "Елены Уздельниковой", description:"", },
    { id: 5, img: "./images/lottery/rubinart1.jpg", name: "Четверо в квартире", whoIsPlaying: "Рубин Арт", description:"", },
    { id: 6, img: "./images/lottery/rubinart2.jpg", name: "Верблюдуин", whoIsPlaying: "Рубин Арт", description:"", },
    { id: 7, img: "./images/lottery/doll.jpg", name: "Куколка", whoIsPlaying: "AstaDolls", description:"",}, 
    { id: 8, img: "./images/lottery/bookbabel.jpg", name: "Языки мира", whoIsPlaying: "Магазин 'Бабель'", description:"",},
    { id: 9, img: "./images/lottery/bookmiribraginsky.jpg", name: "Книги", whoIsPlaying: "Мири Брагински", description:"",},

    { id: 10, img: "./images/lottery/photogift.jpg", name: "Прогулка фото-сессия В Тель-авиве", whoIsPlaying: "Леры Яковлевой", description: "Сертификат на фотосъемку - прогулку в Тель-Авиве. 1 час , 60 фотографий." },

    { id: 11, img: "./images/lottery/rings.jpg", name: "Два кольца", whoIsPlaying: "Brokain things", description:"Два кольца - оба из фарфора, с золотыми надписями.",},

/*    { id: 12, img: "./images/lottery/tshirt.jpg", name: "Футболка", whoIsPlaying: "Фестиваль в Чемодане", description:"", },
    { id: 13, img: "./images/lottery/sheeps.jpg", name: "Игрушка-овечка", whoIsPlaying: "Елены Павловой", description:"", },
    { id: 14, img: "./images/lottery/neckerchief.jpg", name: "Платок", whoIsPlaying: "Елены Уздельниковой", description:"", },
    { id: 15, img: "./images/lottery/rubinart1.jpg", name: "Четверо в квартире", whoIsPlaying: "Рубин Арт", description:"", },
    { id: 16, img: "./images/lottery/rubinart2.jpg", name: "Верблюдуин", whoIsPlaying: "Рубин Арт", description:"", },
    { id: 17, img: "./images/lottery/doll.jpg", name: "Куколка", whoIsPlaying: "AstaDolls", description:"",}, 
    { id: 18, img: "./images/lottery/bookbabel.jpg", name: "Языки мира", whoIsPlaying: "Магазин 'Бабель'", description:"", },
    { id: 19, img: "./images/lottery/bookmiribraginsky.jpg", name: "Книги", whoIsPlaying: "Мири Брагински", description:"", },
    //Прогулка фото-сессия В Тель-авиве от Леры Яковлевой*/
  ];

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
    <section className="lotterySection__container">
      <div className="lottery__slider-container">
        <button onClick={prevLot} className="lottery-btn">
          <div className="lottery-btn-left"></div>
        </button>
        <div className="lottery">
          <ul className="lottery__ImgContainer">
            {Array.isArray(groupedLots[currentIndex])
              ? groupedLots[currentIndex].map((item) => (
                  <li key={item.id} className="lottery__ImgItem">
                    <img src={item.img} alt={item.name} className="lotterySection__Img" />
                    <div lassName="lotterySection__text-container">
                      <p className="lotterySection__text">{item.name}</p>
                      
                      <p className="lotterySection__text">Лот от {item.whoIsPlaying}</p>

                      {/*<p className="lotterySection__text">количество лотов</p>*/}
                    </div>
                  </li>
                ))
              : (
                <li key={groupedLots[currentIndex].id} className="lottery__ImgItem">
                  <img src={groupedLots[currentIndex].img} alt={groupedLots[currentIndex].name} className="lotterySection__Img" />
                  <div lassName="lotterySection__text-container">
                      <p className="lotterySection__text">{groupedLots[currentIndex].name}</p>
                      
                      <p className="lotterySection__text">Лот от {groupedLots[currentIndex].whoIsPlaying}</p>

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

      <div className="lotterySection__dots">
        {groupedLots.map((_, index) => (
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

export default LotterySlider;
