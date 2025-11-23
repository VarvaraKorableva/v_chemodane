import Container from '../../../../UI-Kit/Container/Container'
import './MainInfo.css'

export default function MainInfo() {
    return(
        <Container as="section">
            <div className='mainInfo_center_container_hanukkha2025 text'>
                <div className='hanukkha2025__mainInfo__first_left_pic'></div>
                <div className='hanukkha2025__mainInfo__second_left_pic'></div>
                <a href={'https://eventbuzz.co.il/producer/v2/Vchemodane'}   
                    target="_blank"
                    rel="noopener noreferrer" 
                    className='hanukkha2025__mainInfo__ticket_pic'>
                </a>
                <div className='hanukkha2025__mainInfo__second_right_pic'></div>
                <p className='hanukkha2025__text__margin'>Научный фестиваль «В чемодане» —</p>
                <h2 className='uppercase hanukkha2025__subtitle'>НАУКА ХАНУКА</h2>


                <p>Мерказ Хадарим, ул. Кирьят Сефер, 25, Хайфа</p>
                <p className='hanukkha2025__text__margin'>17 декабря — 14:00–20:00</p>
                <p className='hanukkha2025__text__margin'>18 декабря — 12:00–20:00</p>

                <p className='hanukkha2025__text__center hanukkha2025__text__margin'>
                    В дни школьных ханукальных каникул мы открываем двери нового фестиваля — вас ждут
                    открытия, эксперименты, научные истории и театральные постановки
                </p>
                
                <div className='hanukkha2025__mainInfo__lastpic'></div>
            </div>
        </Container>
    )
}