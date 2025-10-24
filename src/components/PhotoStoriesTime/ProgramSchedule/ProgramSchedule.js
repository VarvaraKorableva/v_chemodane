import React from 'react';
import Container from '../../../UI-Kit/Container/Container'
import Heading from '../../../UI-Kit/Heading/Heading'

function ProgramSchedule() {
  return (
    <Container as="section" id='PhotoStoriesTime__ProgramSchedule'>
      <Heading className="PhotoStoriesTimeHeading PhotoStoriesTimeHeading__blue">Расписание встреч</Heading>
      <ul className='text'>
        <li>
          <strong className='uppercase'>23 ноября 2025</strong><br />
          Семинар: Знакомство с программой и ресурсами для исследований. <br />
          <em>Ведущие:</em> Вера Ярилина / Ася Бобрицкая
        </li>
        <li>
          <strong className='uppercase'>30 ноября 2025</strong><br />
          Повседневная фотография: храним, исследуем, интерпретируем. <br />
          <em>Ведущая:</em> Леся Пчелка
        </li>
        <li>
          <strong className='uppercase'>7 декабря 2025</strong><br />
          Больше не безымянные — проект опознания фотографий. <br />
          Мемориальный комплекс Яд Вашем, эксклюзивное посещение архива. <br />
          <em>Ведущая:</em> Фаина Мушински
        </li>
        <li>
          <strong className='uppercase'>15 января 2026</strong><br />
          ФотографиЯ: самоидентификация и фотография. Поиск идеи и осмысление себя. <br />
          Экскурсия по фотоэкспозициям АНУ — Музей еврейского народа. <br />
          <em>Ведущий:</em> Алекс Табак
        </li>
        <li>
          <strong className='uppercase'>2 – 28 декабря 2025</strong><br />
          Консультации с Верой Ярилиной. Даты творческих консультаций будут утверждены после формирования группы.
        </li>
      </ul>
    </Container>
  );
}

export default ProgramSchedule;
