import './AboutFectivalMain.css'

function AboutFectivalMain() {
    return(
        <section className="aboutFectivalMainSection" id="main__about">
            <div className="aboutFectivalMainWrapper">

                <div className='aboutFectivalMain-title-sub-title-pic-container'>
                    <div className='aboutFectivalMain-zigZag-pic'></div>
                        <div>
                            <h2 className="aboutFectivalMain-title">О ФЕСТИВАЛЕ</h2>
                            <h3 className="aboutFectivalMain-subtitle">СЕМЕЙНЫЙ ФЕСТИВАЛЬ КНИГ НА РУССКОМ ЯЗЫКЕ <span className="aboutFectivalMain-subtitle-bold">"В ЧЕМОДАНЕ"</span> — ЭТО</h3>
                        </div>
                    <div className='aboutFectivalMain-stared-dots-pic'></div>
                </div>

                <p className="aboutFectivalMain-text aboutFectivalMain-text-first-p-margin">Уникальное событие, созданное представителями новой алии при поддержке местного профессионального сообщества летом 2022 года.</p>
                <div className="aboutFectivalMain-dots-pic"></div>
                <div className="aboutFectivalMain-flex-container-lamed">
                    <div className="aboutFectivalMain-letters-lamed"></div>
                    <p className="aboutFectivalMain-text aboutFectivalMain-shiftedText">Фестивалю удалось объединить издателей, авторов, иллюстраторов, переводчиков, ученых, музыкантов, педагогов и представителей различных творческих направлений и, конечно, читателей детской литературы на русском языке из разных стран.</p>
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
                        <p className="aboutFectivalMain-text">Это площадка, предлагающая специалистам по детской и подростковой литературе, педагогам, писателям, искусствоведам и иллюстраторам заявить о себе.</p>
                        <div className="aboutFectivalMain-one-blue-round"></div>
                        <div className="aboutFectivalMain-orange-round-text-container">
                            <div className="aboutFectivalMain-one-orange-round"></div>
                            <p className="aboutFectivalMain-text aboutFectivalMain-shiftedText">Раскрыть свои таланты в работе с детьми и текстами, найти единомышленников и творческие проекты.</p>
                        </div>
                    </div>
                    <div className="aboutFectivalMain-letters-pic"></div>
                </div>

                {/*<div className="aboutFectivalMain-open-right-book"></div>*/}

                <div className="aboutFectivalMain-fourth-container">
                    <div className="aboutFectivalMain-fourth-container-letter-pey"></div>
                    <p className="aboutFectivalMain-text aboutFectivalMain-down-the-same-margin">Уникальная возможность для детей и родителей приобрести книги на русском языке независимых издательств.</p>
                    
                    <div className="aboutFectivalMain-fourth-container-text-wrapper">
                        <div className="aboutFectivalMain-fourth-container-three-zigzags"></div>
                        <div className="aboutFectivalMain-fourth-container-text-container">
                            <p className="aboutFectivalMain-text aboutFectivalMain-shiftedText aboutFectivalMain-down-margin">Встретиться со специалистами по детскому чтению.</p>
                            <p className="aboutFectivalMain-text aboutFectivalMain-shiftedText">Поговорить напрямую с создателями книг: редакторами, писателями, переводчиками и иллюстраторами, популяризаторами науки и педагогами.</p>
                        </div>
                    </div>
                        <div className="aboutFectivalMain-fourth-container-dots-pic"></div>
                    <div className="aboutFectivalMain-fourth-container-letters-wrapper">
                        <div className="aboutFectivalMain-fourth-container-letter-a"></div>
                        <div className="aboutFectivalMain-fourth-container-letter-b"></div>
                    </div>
                </div>
                <div className="aboutFectivalMain-fifth-container">
                    <p className="aboutFectivalMain-text">Незабываемая атмосфера мастер-классов и лекций, встреч с друзьями и коллегами.</p>
                    <div className="aboutFectivalMain-letters-container">
                        <div className="aboutFectivalMain-letter-dalet"></div>
                        <div className="aboutFectivalMain-letter-l"></div>
                    </div>
                    <p className="aboutFectivalMain-text aboutFectivalMain-down-the-same-margin">Это совместное творчество, обсуждение актуальных тем.</p>
                    <div className="aboutFectivalMain-letters-i-container">
                        <div className="aboutFectivalMain-letter-i"></div>
                        <p className="aboutFectivalMain-text">Специально организованный профессионалами маркет, на котором представлены книги независимых издательств, работы современных художников, керамистов и других мастеров.</p>
                    </div>

                    <div className="aboutFectivalMain-open-book"></div>
                </div>
            </div>
        </section>
    )
}        

export default AboutFectivalMain