import './AboutFectivalMain.css'

function AboutFectivalMain() {
    return(
        <section className="aboutFectivalMainSection" id="main__about">
            <div className="aboutFectivalMainWrapper">

                <div className='aboutFectivalMain-title-sub-title-pic-container'>
                    <div className='aboutFectivalMain-zigZag-pic'></div>
                        <div className='aboutFectivalMain-main-title-container'>
                            <h2 className="aboutFectivalMain-title">О ФЕСТИВАЛЕ</h2>
                            <h3 className="aboutFectivalMain-subtitle">
                                <span className="aboutFectivalMain-subtitle-one-line">СЕМЕЙНЫЙ ФЕСТИВАЛЬ КНИГ</span>
                                <span className="aboutFectivalMain-subtitle-one-line"> НА РУССКОМ ЯЗЫКЕ</span> 
                                <span className="aboutFectivalMain-subtitle-bold"> «В ЧЕМОДАНЕ»</span>
                                <span>ЭТО</span>
                            </h3>
                            
                        </div>
                    <div className='aboutFectivalMain-stared-dots-pic'></div>
                </div>

                <p className="aboutFectivalMain-text aboutFectivalMain-text-first-p-margin">Книжный семейный фестиваль «В чемодане» был основан в сентябре 2022 года и с тех пор стал главным культурным русскоязычным событием в Израиле.</p>
                <div className="aboutFectivalMain-dots-pic"></div>
                <div className="aboutFectivalMain-flex-container-lamed">
                    <div className="aboutFectivalMain-letters-lamed"></div>
                    <p className="aboutFectivalMain-text aboutFectivalMain-shiftedText">Фестиваль регулярно проводится в Тель-Авиве, Хайфе и Иерусалиме, собирая любителей литературы и семейного досуга.</p>
                </div>
                <div className='aboutFectivalMain-flex-container'>
                    <div className='aboutFectivalMain-flex-book-letters-pics'></div>
                    <div className='aboutFectivalMain-flex-zig-zag-of-two-pic'></div>
                    {/*<div className='aboutFectivalMain-flex-container-one-zig-zag'></div>*/}
                    <div className='aboutFectivalMain-flex-container-rounds'></div>
                </div>

                <div className="aboutFectivalMain-third-container">

                    <div className="aboutFectivalMain-rounds-pic"></div>
                    <div className="aboutFectivalMain-third-container-text-container">
                        <p className="aboutFectivalMain-text">«В Чемодане» является единственным в Израиле книжным фестивалем литературы на русском  языке. На фестиваль привозят свои книги независимые издательства из России, Европы и Израиля, а также местные книжные магазины.</p>
                        <div className="aboutFectivalMain-one-blue-round"></div>
                        <div className="aboutFectivalMain-orange-round-text-container">
                            <div className="aboutFectivalMain-one-orange-round"></div>
                            <p className="aboutFectivalMain-text aboutFectivalMain-shiftedText">Фестиваль «В Чемодане» славится своими активностями: чтениями, круглыми столами, мастер-классами, лекциями, экскурсиями, концертами и театральными постановками.</p>
                        </div>
                    </div>
                    <div className="aboutFectivalMain-letters-pic"></div>
                </div>

                {/*<div className="aboutFectivalMain-open-right-book"></div>*/}

                <div className="aboutFectivalMain-fourth-container">
                    <div className="aboutFectivalMain-fourth-container-letter-pey"></div>
                    <p className="aboutFectivalMain-text aboutFectivalMain-down-the-same-margin">Мероприятия фестиваля ориентированы на детей, подростков и их родителей. Фестиваль предлагает помимо новинок и хитов авторитетных 
издательств, насыщенную программу с участием известных писателей, переводчиков, иллюстраторов, издателей,общественных и театральных деятелей.
</p>
                    
                    <div className="aboutFectivalMain-fourth-container-text-wrapper">
                        <div className="aboutFectivalMain-fourth-container-three-zigzags"></div>
                        <div className="aboutFectivalMain-fourth-container-text-container">
                            <p className="aboutFectivalMain-text aboutFectivalMain-shiftedText aboutFectivalMain-down-margin">Встретиться со специалистами по детскому чтению.</p>
                            <p className="aboutFectivalMain-text aboutFectivalMain-shiftedText">Задача фестиваля — познакомить новых репатриантов с еврейской культурой и литературой через искусство. Важно, чтобы через мероприятия фестиваля “В Чемодане” участники могли найти свою еврейскую идентичность и почувствовать связь с традициями и историей народа Израиля.
</p>
                        </div>
                    </div>
                        <div className="aboutFectivalMain-fourth-container-dots-pic"></div>
                    <div className="aboutFectivalMain-fourth-container-letters-wrapper">
                        <div className="aboutFectivalMain-fourth-container-letter-a"></div>
                        <div className="aboutFectivalMain-fourth-container-letter-b"></div>
                    </div>
                </div>
                <div className="aboutFectivalMain-fifth-container">
                    <p className="aboutFectivalMain-text">Наши мероприятия создают пространство для общения и обмена опытом, предоставляют площадку новым коллективам и творческим деятелям, помогая семьям чувствовать себя  комфортно в привычном кругу, а также укреплять свою связь с еврейским наследием.
</p>
                    <div className="aboutFectivalMain-letters-container">
                        <div className="aboutFectivalMain-letter-dalet"></div>
                        <div className="aboutFectivalMain-letter-l"></div>
                    </div>
                    
                    <div className="aboutFectivalMain-letters-i-container">
                        <div className="aboutFectivalMain-letter-i"></div>
                        <p className="aboutFectivalMain-text">Мы уверены, что «В чемодане» помогает людям найти моменты радости и уюта, несмотря на вызовы внешнего мира.</p>
                    </div>

                    <div className="aboutFectivalMain-open-book"></div>
                </div>
            </div>
        </section>
    )
}        

export default AboutFectivalMain