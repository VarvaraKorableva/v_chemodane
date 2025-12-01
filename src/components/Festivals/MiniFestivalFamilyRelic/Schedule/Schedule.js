import React, { useState, useEffect } from 'react';
import Heading from '../../../../UI-Kit/Heading/HeadingClean'
import './Schedule.css'
import Container from '../../../../UI-Kit/Container/Container'

function Schedule({schedulePdf, schedulePng, schedulePngSecond = null, idName}) {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
      };
    
      useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return(
        <Container as="section" id={idName}>

            <div className='schedule__title-btn__container'>
                <Heading>Расписание</Heading>
                <a  download="Расписание.pdf" href={schedulePdf} className="schedule__download-btn">
                    {width > 700 ? 'Скачать расписание' : 'Скачать'}
                </a>
            </div>

            <div className='schedule__img-container_mini'>
                <img src={schedulePng} alt="schedule" className='schedule__img_mini'></img>
            </div>

            {schedulePngSecond?
            
                <div className='schedule__img-container_mini'>
                    <img src={schedulePngSecond} alt="schedule" className='schedule__img_mini'></img>
                </div>
            :
                <></>    
            }
            
        </Container>
    )
}

export default Schedule