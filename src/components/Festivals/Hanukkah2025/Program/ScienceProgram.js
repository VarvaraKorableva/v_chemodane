import Container from '../../../../UI-Kit/Container/Container'
import Heading from '../../../../UI-Kit/Heading/Heading'
import './Program.css'
import '../hanukkah2025.css'

export default function ScienceProgram() {
    return(
        <Container as="section">
            
            <Heading className="heading heading__3B6BB4 scienceProgram__short__title">Научная программа</Heading>

            <div className='center_container_hanukkha2025'>
                <ul className='text program_ul'>
                    <li>
                        <h3 className='uppercase scienceProgram__title__container'>Биологические мастер-классы от команды «Лаба в музее»</h3>
                        <p>
                        Занятия для разных возрастов — вас ждут запутанные детективные истории и научные эксперименты,
                        которые хочется повторить дома.
                        </p>

                        <div className='scienceProgram__first__right__pic'></div>
                    </li >

                    <li className='TheatreProgram__pics__container'>
                        <h3 className='uppercase scienceProgram__title__container'>Лекции о природе Израиля</h3>
                        <p>— Орнитолог Роман Скибневский расскажет о птицах, их повадках и миграциях.</p>
                        <p>— Вероника Арсеньева — о растениях, которые мы встречаем каждый день, но редко знаем их историю.</p>

                        <div className='scienceProgram__second__right__pic'></div>
                    </li>

                    <li>
                        <h3 className='uppercase scienceProgram__title__container'>Интерактивная лекция о молекулах от Якова Журинского</h3>
                        <p>Простым и живым языком о том, из чего устроен наш мир.</p>
                    </li>
                </ul>

                <div className='scienceProgram__lastPic'></div>
            </div>
        </Container>
    )
}