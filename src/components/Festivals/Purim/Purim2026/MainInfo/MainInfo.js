import Container from '../../../../../UI-Kit/Container/Container'
import './MainInfo.css'
import {Link} from 'react-router-dom'

export default function MainInfo() {
    return(
        <Container as="section">
            <div className='mainInfo_center_container_hanukkha2025 text'>
                <p className='hanukkha2025__text__margin'>Пурим “в чемодане”</p>
                <h2 className='uppercase hanukkha2025__subtitle'>в АНУ — Музее еврейского народа</h2>
                
                <p className='hanukkha2025__text__margin'>3 марта — 12:00–20:00</p>
                <p className='hanukkha2025__text__margin'>4 марта — 12:00–20:00</p>

                <p>
                3 и 4 марта мы ждём вас на главном пуримском семейном мероприятии — книжном фестивале «В чемодане», который пройдёт в АНУ — Музее еврейского народа
                </p>

                <p>Вход на фестиваль свободный, но на театральные постановки и некоторые активности нужны билеты или регистрация. 
                Это фестиваль для всей семьи: для детей, подростков, родителей, бабушек и дедушек. У нас интересно и весело в любом возрасте. Особый акцент фестиваля — клоунада: живая, умная, смешная и трогательная, одинаково понятная детям и взрослым.
                </p>
                
                <p>Мы ждём вас в пуримских нарядах. «В чемодане» — это фестиваль, где костюмы носят не только дети, но и взрослые, и где Пурим празднуют всей семьёй.</p>
            </div>
        </Container>
    )
}