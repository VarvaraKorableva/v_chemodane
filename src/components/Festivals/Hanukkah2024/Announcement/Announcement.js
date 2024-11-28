import './Announcement.css'
import Heading from '../../../../UI-Kit/Heading/Heading'

function Announcement() {

    return(
        <section className="announcement_section" id='announcement'>
            <div className='announcement_pic_rounds'></div>
            <Heading>Анонс</Heading>
            <div className="announcement_text_pics_wrapper">
              
              <div className='announcement_left_pics_wrapper'>
                <div className="announcement_left_pics_hanukia"></div>
                <div className="announcement_left_pics_orangeround general_pic_style"></div>
                <div className="announcement_left_pics_savivon general_pic_style"></div>
                <div className="announcement_left_pics_star"></div>
                <div className="announcement_left_pics_cake general_pic_style"></div>
              </div>

              <div className="announcement_text_wrapper">
                <div className="announcement_wrapper">
                    <h3 className="announcement_title_container">
                        <span>26 и 27 декабря</span>
                        <span>хАНУка в музее</span>
                        <span>фестивалем «В чемодане»</span>
                    </h3>
                </div>
                <div className="announcement_pic_zig-zag"></div>

                <p className="announcement_text announcement_text_bold announcement_text_first_container">Мы собрали всё, что вы любите – разговоры о литературе, детские спектакли, авторские экскурсии для взрослых и детей по экспозиции музея, много музыки, света, хороших книжек для детей и взрослых, а также идей для подарков на маркете!</p>

                <ul className="announcement_text announcement_text_margin">
                    <li><span className="announcement_text_bold">Лекция о литературе</span> от Дмитрия Львовича Быкова</li>
                    <li><span className="announcement_text_bold">Встреча с писательницей</span> Мартой Кетро</li>
                    <li><span className="announcement_text_bold">Автограф-сессия иллюстратора</span> @Евгения Антоненкова</li>
                    <li><span className="announcement_text_bold">Детские Ханукальные и новогодние спектакли</span> от театров ДОМ чёрной СОВЫ и Zebra_theater</li>
                    <li><span className="announcement_text_bold">Авторская анимация</span>, специально подобранная для нас куратором Большого фестиваля мультфильмов Диной Годер</li>
                    <li className="announcement_text_bold">Концерт группы Gefilte Drive</li>
                    <li><span className="announcement_text_bold">Хакунальный стенд-ап</span> от раввина Motl Gordon (с зажжением свечи и поеданием пончиков)</li>
                    <li><span className="announcement_text_bold">Специальный гость маркета</span> — представители фестиваля Пражская Книжная Башня с бестселлерами на русском языке, опубликованными новыми европейскими издательствами, так называемый современный “Тамиздат”. Это нельзя пропустить!</li>
                </ul>
            
                <p className="announcement_text announcement_text_margin">🎈 И, конечно же, <span className="announcement_text_bold">детские активности, благотворительная лотерея, атмосфера волшебства, света и любимых зимних праздников!</span></p>

                <p className="announcement_text">Встречаемся <span className="announcement_text_bold">26 декабря</span> с 16 часов и <span className="announcement_text_bold">27 декабря</span> с 10 часов в <span className="announcement_text_bold">АНУ — Музее еврейского народа!</span></p>
              </div>
              <div className='announcement_right_pics_wrapper general_pic_style'>
                <div className="announcement_right_pics_yellowcake"></div>
                <div className="announcement_right_pics_stars"></div>
              </div>

            </div>
        </section>
    )
}

export default Announcement