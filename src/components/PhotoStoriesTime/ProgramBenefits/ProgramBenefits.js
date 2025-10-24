import React from 'react';
import Container from '../../../UI-Kit/Container/Container'
import Heading from '../../../UI-Kit/Heading/Heading'

function ProgramBenefits() {
  return (
    <Container as="section">
      <Heading className="PhotoStoriesTimeHeading PhotoStoriesTimeHeading__blue">Что вы получите от программы</Heading>
      <ul className='text'>
        <li>Объединяющий досуг с детьми и старшими поколениями, погружение в изучение фотографий из семейного архива, которые, возможно, станут вашей семейной реликвией.</li>
        <li>Знакомство с технологией работы с изображениями.</li>
        <li>Возможность поучаствовать в выставке в Иерусалиме в мае 2026.</li>
      </ul>
    </Container>
  );
}

export default ProgramBenefits;
