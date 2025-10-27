import React from 'react';
import Container from '../../../UI-Kit/Container/Container'
import Heading from '../../../UI-Kit/Heading/Heading'

function HowToParticipate() {
  return (
    <Container as="section">
      <Heading className="heading heading__mint">Как участвовать</Heading>
      <ul className='text'>
        <li>
          <a href="https://forms.gle/dE6kVfazs55X3NrB8" target="_blank" rel="noopener noreferrer">
           Заполните анкету для участия.
          </a>
        </li>
        <li>
          Участвуйте в Zoom-встрече проекта — ссылка на встречу будет доступна после регистрации.
        </li>
      </ul>
    </Container>
  );
}

export default HowToParticipate;
