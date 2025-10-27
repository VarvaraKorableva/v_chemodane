import React from 'react';
import Container from '../../../UI-Kit/Container/Container'
import Heading from '../../../UI-Kit/Heading/Heading'

function ProgramCurators() {
  return (
    <Container as="section">
      <Heading className="heading heading__light__blue">Ведущие</Heading>
      <ul className='text'>
        <li>
          <strong>Вера Ярилина</strong><br />
          Психолог, музейный педагог, куратор образовательных программ Zukunft Memorial — Человек в истории
        </li>
        <li>
          <strong>Леся Пчелка</strong><br />
          Художница, основательница и кураторка архива «Веха»
        </li>
        <li>
          <strong>Ася Бобрицкая</strong><br />
          Междисциплинарный художник и исследователь, работает с фотографией, видео, архивами, коллажами. Исследует индивидуальную и коллективную память.
        </li>
      </ul>
    </Container>
  );
}

export default ProgramCurators;
