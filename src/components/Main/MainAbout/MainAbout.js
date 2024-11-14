//MainAbout
import aboutpic from '../../../images/mainPage/aboutpic.png'
import './MainAbout.css'

function MainAbout() {
    return(
        <section className="main-about-section" id="main__about">
            <div className="main-about-title-and-text-container">
                <h2 className="main-about-title">О ФЕСТИВАЛЕ</h2>
                <p className="main-about-text">СЕМЕЙНЫЙ ФЕСТИВАЛЬ КНИГ НА РУССКОМ ЯЗЫКЕ В ЧЕМОДАНЕ-  
                это уникальное событие, созданное представителями новой алии при поддержке местного 
                профессионального сообщества летом 2022 года. Фестивалю удалось объединить издателей, 
                авторов, иллюстраторов, переводчиков, ученых, музыкантов, педагогов и представителей 
                различных творческих направлений и, конечно, читателей детской литературы на русском 
                языке из разных стран.
                </p>

                <div className="main-about-letter-pei"></div>
            </div>
            <div className="main-about-team-pic-and-text-container">
                <div className="main-about-team-pic-container">
                    <img src={aboutpic} alt='team pic' className="main-about-team-pic"></img>
                </div>
                <div className="main-about-text-container">
                    <p className="main-about-long-text">Это площадка, предлагающая специалистам по детской и 
                    подростковой литературе, педагогам, писателям, искусствоведам и иллюстраторам заявить о себе, 
                    раскрыть свои таланты в работе с детьми и текстами, найти единомышленников и творческие проекты.
                    </p>
                    <p className="main-about-long-text">Уникальная возможность для детей и родителей приобрести книги 
                    на русском языке независимых издательств, встретиться со специалистами по детскому чтению, поговорить 
                    напрямую с создателями книг: редакторами, писателями, переводчиками и иллюстраторами, популяризаторами 
                    науки и педагогами.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MainAbout