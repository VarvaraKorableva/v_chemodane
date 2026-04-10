import React from 'react';
import './FestivalLecture.css';
import Container from '../../../../UI-Kit/Container/Container'

const FestivalLecture = () => {
  return (
    <Container as="section">
    <div className="pokaSchedule text text__festival">
        <div className="festival__badge festival__title">
          Фестиваль «в Чемодане» × Прямая Речь
        </div>

        <h2 className="festival__title">
          Интерактивная лекция про научные открытия
        </h2>

        <p className="festival__subtitle">
          13 апреля • 18:00 • онлайн (ZOOM)
        </p>

        <p className="festival__lead">
          В проекте «Пока все дома» — лекция от Ильи Колмановского!
        </p>

        <p className="festival__text">
          За прошедший год ученые провели невероятное количество исследований, и нам нужно срочно их обсудить! 
          Приходите на интерактивную лекцию подкастера Ильи Колмановского.
        </p>

        <div className="festival__block">
          <h3>Что обсудим:</h3>
          <ul className="festival__ul">
            <li>История о двенадцати муравьедах</li>
            <li>О твоей чешуйчатой прапрабабушке, жившей в море</li>
            <li>Зачем пересаживать зуб в глаз</li>
            <li>Как ученые перехитрили осьминога и зачем это нужно</li>
          </ul>
        </div>

        <div className="festival__speaker">
          <h3>Кто ведёт:</h3>
            <div className="festival__pic__container">
                <div className="festival__pic"></div>
                <p>
                    Илья Колмановский — кандидат биологических наук, научный обозреватель,
                    автор подкастов «Голый землекоп» и «Полтора землекопа».
                </p>
            </div>
        </div>

        <div className="festival__info">
          <p><strong>Продолжительность:</strong> 1 час 30 минут</p>
          <p><strong>Возраст:</strong> от 6 до 106 лет :)</p>
        </div>

        </div>
    </Container>
  );
};

export default FestivalLecture;

