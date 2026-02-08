import Container from '../../../../../UI-Kit/Container/Container'
import './MainInfo.css'

export default function MainInfo() {
    return(
        <Container as="section">
            <div className='mainInfo_center_container_purim2026 text'>

                <div className='mainInfo__wawyline_and_round'></div>
                <div className='mainInfo__star'></div>
                <div className='mainInfo__pinkround'></div>
                <div className='mainInfo__blueround'></div>
                <div className='mainInfo__blue__dots'></div>
                <div className='mainInfo__big__star'></div>

                <h1 className='uppercase'>Пурим “в чемодане”</h1>
                <p className='uppercase'>в АНУ — Музее еврейского народа</p>
                
                <p className='bold margin__bottom20'>3 марта — 12:00–20:00</p>
                <p className='bold margin__bottom20'>4 марта — 12:00–20:00</p>

                <p>
                3 и 4 марта мы ждём вас на главном пуримском семейном мероприятии — книжном фестивале «В чемодане», который пройдёт в АНУ — Музее еврейского народа
                </p>

                <p>Это фестиваль для всей семьи: для детей, подростков, родителей, бабушек и дедушек. У нас интересно и весело в любом возрасте. Особый акцент фестиваля — клоунада: живая, умная, смешная и трогательная, одинаково понятная детям и взрослым.
                </p>
                
                <p>Мы ждём вас в пуримских нарядах. «В чемодане» — это фестиваль, где костюмы носят не только дети, но и взрослые, и где Пурим празднуют всей семьёй.</p>

            </div>
        </Container>
    )
}