import Container from '../../../../UI-Kit/Container/Container'
import Heading from '../../../../UI-Kit/Heading/Heading'
import './Program.css'
import '../hanukkah2025.css'

export default function TheatreProgram() {
    return(
        <Container as="section">
            
            <Heading className="heading heading__F47622">Театральная программа</Heading>
            <div className='center_container_hanukkha2025'>
                <ul className='text program_ul'>
                    <li>
                        <h3 className='uppercase'>спектакль «Город клоуна Пика»</h3>
                        <p>
                        Добрая и весёлая история по пьесе Михаила Бартенева для детей от 5 лет. Яркий, музыкальный,
                        живой спектакль, который любят и дети, и родители.
                        </p>
                    </li>


                    <li className='TheatreProgram__pics__container'>
                        <h3 className='uppercase'>СПЕКТАКЛЬ «Удивительное путешествие Эдварда» (по книге Кейт ДиКамилло)</h3>
                        <p>
                        Совместный проект праздничного агентства HugUחג и театра Tari. Режиссёрская команда — Саша
                        Макарская и Илья Иванус. Трогательная история о путешествии фарфорового кролика, рассказанная
                        языком театра и крупной пластики.
                        </p>

                        <div className='TheatreProgram__first_right_pic'></div>
                    </li>


                    <li>
                        <h3 className='uppercase'>Ханукальный спектакль «Козочка Злата»</h3>
                        <p>
                        Спектакль на иврите от театра Рыба Кива, который будет одинаково понятен и взрослым,
                        недавно начавшим учить язык, и детям, которые уже бегло говорят на иврите. Тёплая
                        ханукальная история с юмором, музыкой и вниманием к деталям.
                        </p>
                    </li>


                    <li className='TheatreProgram__pics__container'>
                        <h3 className='uppercase'>Мастер-класс по теневому театру от Александры Андреевой</h3>
                        <p>
                        Дети научатся работать со светом и тенью, создавать персонажей и оживлять их на экране.
                        </p>
                        <div className='TheatreProgram__first_right_pic_2'></div>
                    </li>


                    <li>
                        <h3 className='uppercase'>Мастер-класс от мультипликатора Сергея Бойко</h3>
                        <p>
                        Знакомство с основами анимации, движением и ритмом. Вместе создадим маленькие мультсцены.
                        </p>
                    </li>

                    <div className='TheatreProgram__second_left_pic'></div>
                </ul>

                <div className='theatreProgram__lastPic'></div>
            </div>
        </Container>
    )
}