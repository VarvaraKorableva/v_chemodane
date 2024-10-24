//MainAbout
import aboutpic from '../../../images/mainPage/aboutpic.png'

import './MainAbout.css'

function MainAbout() {
    return(
        <section className="main-about-section">
            <div className="main-about-title-and-text-container">
                <h2 className="main-about-title">О ФЕСТИВАЛЕ</h2>
                <p className="main-about-text">В целом, конечно, начало повседневной работы по формированию позиции не даёт 
                нам иного выбора, кроме определения анализа существующих паттернов поведения!
                В частности, реализация намеченных плановых заданий однозначно определяет каждого 
                участника как способного принимать собственные решения касаемо стандартных подходов.
                </p>

                <div className="main-about-letter-pei"></div>
            </div>
            <div className="main-about-team-pic-and-text-container">
                <div className="main-about-team-pic-container">
                    <img src={aboutpic} alt='team pic' className="main-about-team-pic"></img>
                </div>
                <div className="main-about-text-container">
                    <p className="main-about-long-text">В целом, конечно, начало повседневной работы по формированию позиции не даёт нам 
                    иного выбора, кроме определения анализа существующих паттернов поведения! 
                    В частности, реализация намеченных плановых заданий однозначно определяет 
                    каждого участника как способного принимать собственные решения касаемо стандартных подходов.
                    </p>
                    <p className="main-about-long-text">Имеется спорная точка зрения, гласящая примерно следующее: реплицированные с зарубежных источников, 
                    современные исследования являются только методом политического участия и указаны как претенденты на 
                    роль ключевых факторов. Разнообразный и богатый опыт говорит нам, что перспективное планирование 
                    представляет собой интересный эксперимент проверки укрепления моральных ценностей.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MainAbout