import React, { useState, useEffect } from 'react';
import Heading from '../../../../UI-Kit/Heading/HeadingClean'
import './Schedule.css'
import schedule from '../../../../images/Scheduleminifestival.pdf'
//import scheduleMini from '../../../../images/schedule/scheduleminfest.jpg'
import scheduleMini from '../../../../images/minifestival.jpg'
import Container from '../../../../UI-Kit/Container/Container'

function Schedule({handleCardClick}) {
    const [width, setWidth] = useState(window.innerWidth);

    function onDateClick() {
        handleCardClick(scheduleMini)
    }

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
        <Container as="section" id='schedule_MiniFestivalFamilyRelic'>

            <div className='schedule__title-btn__container'>
                <Heading>Расписание</Heading>
                <a  download="Расписание.pdf" href={schedule} className="schedule__download-btn">
                    {width > 700 ? 'Скачать расписание' : 'Скачать'}
                </a>
            </div>

            <div className='schedule__img-container_mini'>
                <img src={scheduleMini} alt="schedule" className='schedule__img_mini'></img>
            </div>
{/*
            <div className='schedule__container'>
                <p className='schedule__date' onClick={onDateClick}>15 октября</p>
                <div className='schedule__triangle schedule__triangle_1'></div>
                <div className='schedule__triangle schedule__triangle_2'></div>
                <div className='schedule__triangle schedule__triangle_3'></div>
                <div className='schedule__triangle schedule__triangle_4'></div>
                <div className='schedule__triangle schedule__triangle_5'></div>
                <div className='schedule__triangle schedule__triangle_6'></div>
            </div>
*/}
        </Container>
    )
}

export default Schedule