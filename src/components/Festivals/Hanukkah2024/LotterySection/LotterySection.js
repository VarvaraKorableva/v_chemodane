import Heading from '../../../../UI-Kit/Heading/Heading'
import LotterySlider from './LotterySlider/LotterySlider'

import './LotterySection.css'

function LotterySection() {
    return(
        <section className='lotteryNew_container'>
            <Heading>Лотерея</Heading>
            <div className='lotteryNew_text_container'>
                <h3 className='lotteryNew_text lotteryNew_text_bold'>Благотворительная лотерея на фестивале "В Чемодане"</h3>
                <p className='lotteryNew_text'>Фестиваль "В Чемодане" совместно с музеем еврейского народа АНУ организует благотворительную лотерею. Собранные средства будут направлены на помощь семьям, эвакуированным с юга и севера Израиля.</p>

                <p className='lotteryNew_text'>Лоты для лотереи предоставлены:</p>
                <ul>
                    <li className='lotteryNew_text'>Независимыми издательствами и писателями</li>
                    <li className='lotteryNew_text'>Ювелирами и мастерами изделий ручной работы</li>
                    <li className='lotteryNew_text'>Израильскими русскоязычными театрами</li>
                    <li className='lotteryNew_text'>Организаторами мероприятий для детей и взрослых</li>
                </ul>

                <p className='lotteryNew_text lotteryNew_text_bold'>На благотворительную лотерею нужно приобретать билеты заранее до 26 декабря включительно. Розыгрыш состоится 27 декабря 2024 г в 13.00 на фестивале в зале ТИШ.</p>

                <h3 className='lotteryNew_title'>Как участвовать?</h3>
                <p className='lotteryNew_text'>Билеты можно приобрести онлайн по указанной ссылке во время фестиваля “В Чемодане” 26 и 27 декабря.</p>
                <p className='lotteryNew_text'>Вы можете купить несколько билетов, увеличивая свои шансы на победу.</p>

                <h3 className='lotteryNew_title'>Место и дата розыгрыша</h3>
                <p className='lotteryNew_text'>Дата: Пятница, 27 декабря 2024 года</p>
                <p className='lotteryNew_text'>Время: 13.00</p>
                <p className='lotteryNew_text'>Зал: ТИШ</p>

                <h3 className='lotteryNew_title'>Внимание:</h3>
                <p className='lotteryNew_text'>Продажа билетов на лотерею закроется за полчаса до розыгрыша. Покупайте билеты заранее. Благотворительная Лотерея будет проводиться только среди присутствующих в зале. Если выиграл тот, кого в этот момент в зале нет, приз будет разыгрываться снова. Розыгрыш ведет Лика Длугач.</p>
{/*}
                <p className='lotteryNew_text lotteryNew_text_bold'>Приходите на фестиваль “В Чемодане” и покупайте билеты на лотерею.</p>
                <p className='lotteryNew_text lotteryNew_text_bold'>Это хороший шанс не просто получить приз, но и помочь людям, которые оказались в сложной ситуации.</p>
*/}
                <h3 className='lotteryNew_title'>Лоты</h3>
                <LotterySlider></LotterySlider>
            </div>

        </section>
    )
}

export default LotterySection