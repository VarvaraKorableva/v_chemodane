import Heading from '../../../../UI-Kit/Heading/Heading'
import Container from '../../../../UI-Kit/Container/Container'

import './LotterySection.css'

function LotterySection() {
    return(
        <Container as="section" id='lottery'>
            <Heading>Лотерея</Heading>
            <div className="lotteryNew_ordered_circles"></div>
            <div className="lotteryNew_savivon"></div>
            <div className="lotteryNew_circles"></div>
            <div className="lotteryNew_hanukia"></div>
            <div className='lotteryNew_text_container'>
                <h3 className='lotteryNew_text lotteryNew_text_bold'>Благотворительная лотерея на фестивале «В чемодане»</h3>
                <p className='lotteryNew_text lotteryNew_text_margin'>Фестиваль «В чемодане» совместно с <a href="https://www.anumuseum.org.il/ru/" target="_blank" className="lotteryNew_text_link">музеем еврейского народа АНУ</a> организует благотворительную лотерею. Собранные средства будут направлены на помощь семьям, эвакуированным с юга и севера Израиля.</p>
                <a href='https://www.anumuseum.org.il/ru/events/lottery/' target="_blank" className='lotteryNew_buy_btn'>Купить лотерейный билет</a>
                <p className='lotteryNew_text'>Лоты для лотереи предоставлены:</p>
                <ul>
                    <li className='lotteryNew_text'>Независимыми издательствами и писателями</li>
                    <li className='lotteryNew_text'>Ювелирами и мастерами изделий ручной работы</li>
                    <li className='lotteryNew_text'>Израильскими русскоязычными театрами</li>
                    <li className='lotteryNew_text'>Организаторами мероприятий для детей и взрослых</li>
                    <li className='lotteryNew_text'>Интернет провайдером</li>
                </ul>

                <p className='lotteryNew_text lotteryNew_text_bold'>На благотворительную лотерею нужно приобретать билеты заранее до 26 декабря включительно. Розыгрыш состоится 27 декабря 2024 г в 13.00 на фестивале в зале ТИШ.</p>

                <h3 className='lotteryNew_title lotteryNew_title_star_container'>
                    Как участвовать?
                    <span className="lotteryNew_rounds"></span>
                </h3>
                <ul>
                    <li className='lotteryNew_text'>Билеты можно приобрести онлайн по указанной ссылке</li>
                    <li className='lotteryNew_text'>Во время фестиваля «В чемодане» 26 и 27 декабря.</li>
                </ul>
                <p className='lotteryNew_text'>Вы можете купить несколько билетов, увеличивая свои шансы на победу.</p>

                <h3 className='lotteryNew_title lotteryNew_title_star_container'>
                    Место и дата розыгрыша
                    <span className="lotteryNew_star"></span>
                </h3>
                <p className='lotteryNew_text'>Дата: Пятница, 27 декабря 2024 года</p>
                <p className='lotteryNew_text'>Время: 13.00</p>
                <p className='lotteryNew_text'>Зал: ТИШ</p>

                <h3 className='lotteryNew_title'>Обратите Внимание</h3>
                <p className='lotteryNew_text'>Продажа билетов на лотерею закроется за полчаса до розыгрыша. Покупайте билеты заранее.</p> 
                <p className='lotteryNew_text'>Если выиграл тот, кто в этот момент отсутствует в зале, организаторы свяжутся с выигрывшим и найдут способ передать приз позже.</p>
                <p className='lotteryNew_text'>Розыгрыш ведет Лика Длугач.</p>  
            
                <h3 className='lotteryNew_title'>Лоты</h3>
                
                   
            </div>

        </Container>
    )
}

export default LotterySection