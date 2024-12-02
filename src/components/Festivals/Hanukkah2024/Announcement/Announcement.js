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
                    <li><span className="announcement_text_bold">Лекция о литературе</span> от <a href='https://t.me/dmibykov' target="_blank" className="announcement_text_link">Дмитрия Быкова</a></li>
                    <li><span className="announcement_text_bold">Разговор о свободе слова с правозащитником</span> <a href='https://ru.wikipedia.org/wiki/Даниэль,_Александр_Юльевич' target="_blank" className="announcement_text_link">Александром Даниэлем Даниэль</a></li>
                    <li><span className="announcement_text_bold">Встреча с писательницей</span><a href='https://www.facebook.com/marta.c.ketro' target="_blank" className="announcement_text_link"> Мартой Кетро</a> и <span className="announcement_text_bold">художником</span> <a href='https://www.facebook.com/p/Andrei-Popov-100001768221323/' target="_blank" className="announcement_text_link">Андреем Поповым</a></li>
                    <li><span className="announcement_text_bold">Автограф-сессия иллюстратора</span> <a href='https://www.eantonenkov.com/' target="_blank" className="announcement_text_link">Евгения Антоненкова</a></li>
                    <li><span className="announcement_text_bold">Детские Ханукальные и новогодние спектакли</span> от театров <a href='https://www.blackowlhouse.com/ru/main' target="_blank" className="announcement_text_link">ДОМ чёрной СОВЫ</a> и <a href='https://www.zebratheater.com' target="_blank" className="announcement_text_link">Zebra_theater</a>, молодежной театральной студии проекта<a href='https://www.dikieprogulki.org/' target="_blank" className="announcement_text_link"> The Walks</a></li>
                    <li><span className="announcement_text_bold">Авторская анимация</span>, специально подобранная для нас куратором Большого фестиваля мультфильмов Диной Годер</li>
                    <li className="announcement_text_bold">Концерт группы <a href='https://www.youtube.com/@GefilteDrive' target="_blank" className="announcement_text_link">Gefilte Drive</a></li>
                    <li><span className="announcement_text_bold">Хакунальный стенд-ап</span> от раввина <a href="https://www.instagram.com/motlgordon" target="_blank" className="announcement_text_link">Motl Gordon</a> (с зажжением свечи и поеданием пончиков)</li>
                    <li><span className="announcement_text_bold">Специальный гость маркета</span> — представители фестиваля <a href='https://praguebooktower.cz/' target="_blank" className="announcement_text_link">Пражская Книжная Башня</a> с бестселлерами на русском языке, опубликованными новыми европейскими издательствами, так называемый современный “Тамиздат”. Это нельзя пропустить!</li>
                    <li><span className="announcement_text_bold">Игры и практикумы</span> от Анны Никулишевой и Евгения Заслоцкого</li>
                    <li><span className="announcement_text_bold">Экскурсии по АНУ</span> - Музей еврейского народа для детей и взрослых с Александрой Андреевой, Зеевом Волком и Зоей Брук</li>
                    <li><span className="announcement_text_bold">Благотворительная лотерея</span> в пользу семей, перемещенных с Севера и Юга Израиля</li>
                    <li>A один из наших спонсоров компания <a href='https://www.redmax.tv' target="_blank" className="announcement_text_link">Redmax TV</a> даже <span className="announcement_text_bold">разыграет телевизор!</span> Розыгрыш лотереи проведет Лика Длугач</li>
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